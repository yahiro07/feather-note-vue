//時系列に並んだIDのジェネレータ
//Twitter Snowflakeの形式を参考にした簡易実装
//workerId:0-1023,実行環境毎に異なる値を指定する
//文字列形式でIDを返す
let sequence = 0
export function generateIdTimeSequential(workerId = 0, incrementSequence = true): string {
  const d1 = Date.now()
  const d2 = new Date('2020/1/1').getTime()
  const timePart = d1 - d2
  const fullValue = (BigInt(timePart) << 22n) | (BigInt(workerId) << 12n) | BigInt(sequence)
  if (incrementSequence) {
    sequence = (sequence + 1) & 0xfff
  }
  return fullValue.toString()
}
