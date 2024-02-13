/* eslint-disable no-inner-declarations */

export async function loadAvatarImageFromLocalFile(size: number): Promise<string> {
  const imageDataUrl = await loadLocalImageFile()
  return imageResizerModule.resizeImageForAvatar(imageDataUrl, size)
}

async function loadLocalImageFile(): Promise<string> {
  return await new Promise((resolve, reject) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.addEventListener('change', () => {
      const file = input.files?.[0]
      if (file) {
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          const dataUrl = fileReader.result as string
          resolve(dataUrl)
        })
        fileReader.readAsDataURL(file)
      } else {
        reject()
      }
    })
    input.click()
  })
}

namespace imageResizerModule {
  type Size = { w: number; h: number }

  const sizeOp = {
    scale(size: Size, sc: number): Size {
      return { w: size.w * sc, h: size.h * sc }
    }
  }

  const canvasOp = {
    create(size: Size) {
      const canvas = document.createElement('canvas')
      canvas.width = size.w
      canvas.height = size.h
      return canvas
    },
    getContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
      return canvas.getContext('2d')!
    },
    draw(dest: HTMLCanvasElement, source: HTMLCanvasElement | HTMLImageElement | ImageBitmap) {
      const ctx = dest.getContext('2d')!
      ctx.drawImage(source, 0, 0)
    }
  }

  function convertBase64StringToArrayBuffer(base64String: string): ArrayBuffer {
    const byteString = globalThis.window.atob(base64String)
    const bytes = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++) {
      bytes[i] = byteString.charCodeAt(i)
    }
    return bytes.buffer
  }

  function convertDataUrlToBlob(dataUrl: string) {
    const buffer = convertBase64StringToArrayBuffer(dataUrl.split(',')[1])
    const mimeType = dataUrl.match(/:([a-z/-]+);/)![1]
    return new Blob([buffer], { type: mimeType })
  }

  async function loadImageDataUrlToCanvas(
    imageDataUrl: string,
    bkColor: string | undefined
  ): Promise<HTMLCanvasElement> {
    const blob = convertDataUrlToBlob(imageDataUrl)
    const imageBitmap = await createImageBitmap(blob, {
      resizeQuality: 'high'
    })
    const canvas = canvasOp.create({
      w: imageBitmap.width,
      h: imageBitmap.height
    })
    if (bkColor) {
      const ctx = canvasOp.getContext(canvas)
      ctx.fillStyle = bkColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
    canvasOp.draw(canvas, imageBitmap)
    return canvas
  }

  function clipCanvasSquared(srcCanvas: HTMLCanvasElement): HTMLCanvasElement {
    if (srcCanvas.width === srcCanvas.height) return srcCanvas
    const w = srcCanvas.width
    const h = srcCanvas.height
    const size = Math.min(w, h)
    const destCanvas = canvasOp.create({ w: size, h: size })
    const ctx = canvasOp.getContext(destCanvas)
    const offsetX = (size - srcCanvas.width) / 2
    const offsetY = (size - srcCanvas.height) / 2
    ctx.drawImage(srcCanvas, offsetX, offsetY)
    return destCanvas
  }

  async function resizeCanvasWithCreateImageBitmap(
    sourceCanvas: HTMLCanvasElement,
    destSize: Size
  ): Promise<HTMLCanvasElement> {
    const imageBitmap = await createImageBitmap(sourceCanvas, {
      resizeWidth: destSize.w,
      resizeHeight: destSize.h,
      resizeQuality: 'high'
    })
    const resizedCanvas = canvasOp.create(destSize)
    canvasOp.draw(resizedCanvas, imageBitmap)
    return resizedCanvas
  }

  async function resizeCanvasWithCreateImageBitmap_twoStep(
    sourceCanvas: HTMLCanvasElement,
    destSize: Size,
    preSizingScale = 2
  ): Promise<HTMLCanvasElement> {
    if (sourceCanvas.width > destSize.w * preSizingScale) {
      const midSize = sizeOp.scale(destSize, preSizingScale)
      const midCanvas = await resizeCanvasWithCreateImageBitmap(sourceCanvas, midSize)
      return resizeCanvasWithCreateImageBitmap(midCanvas, destSize)
    } else {
      return resizeCanvasWithCreateImageBitmap(sourceCanvas, destSize)
    }
  }

  export async function resizeImageForAvatar(imageDataUrl: string, size: number): Promise<string> {
    const canvasOriginal = await loadImageDataUrlToCanvas(imageDataUrl, '#FFF')
    const canvasClipped = clipCanvasSquared(canvasOriginal)
    const canvasResized = await resizeCanvasWithCreateImageBitmap_twoStep(canvasClipped, {
      w: size,
      h: size
    })
    return canvasResized.toDataURL()
  }
}
