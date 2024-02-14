<script setup lang="ts"></script>

<template>
  <div class="fc-about-content">
    <h1>FeatherNote</h1>
    <h2>概要</h2>
    <p>
      FeatherNoteは、タイムライン風の画面に発言を書き込んでいくメモアプリです。<br />
      思ったことを気軽に書き込めて、まとまった内容をあとからでも参照しやすい、
      というコンセプトを実現するために画面構成を工夫しました。<br />
      個人的なメモの書き込みを想定しており、ブラウザだけで完結して動作します。<br />
      編集データはブラウザの保存領域で保持されます。
    </p>
    <h2>機能一覧</h2>
    <ul>
      <li>ノートの作成</li>
      <li>ノート内の発言の追加</li>
      <li>編集データの永続化</li>
      <li>ユーザプロフィールの変更</li>
      <li>プリセットノートの表示</li>
      <li>スクロール方向の切り替え</li>
      <li>発言の編集と削除</li>
    </ul>
    <h2>技術構成</h2>
    <h3>ソースコード</h3>
    <p>
      <a href="https://github.com/yahiro07/feather-note-vue"
        >https://github.com/yahiro07/feather-note-vue</a
      >
    </p>
    <h3>使用技術</h3>
    <ul>
      <li>Typescript</li>
      <li>Vue.js</li>
      <li>Pinia</li>
      <li>Sass (SCSS)</li>
    </ul>
    <h3>構成上の特徴</h3>
    <ul>
      <li>Composition APIを利用して、状態管理の実装をビューから切り離しています。</li>
      <li>状態管理をストアに寄せて、ビュー側でなるべくロジックを持たないようにしました。</li>
      <li>Atomic Designを採用して、わかりやすいコンポーネント階層にしました。</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.fc-about-content {
  h1,
  h2,
  h3 {
    margin: revert;
  }
  ul {
    margin-left: 40px;
  }

  line-height: 1.6;
  padding: 4px 24px 32px;
  background: var(--cl-white);
}
</style>
