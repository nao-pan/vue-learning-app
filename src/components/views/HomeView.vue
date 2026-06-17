<template>
  <div>
    <h1>Vue Learning App</h1>
    <p>Vue学習アプリ</p>

    <h2>基礎機能</h2>

    <ul>
      <li>
        <RouterLink to="/counter"> カウンター </RouterLink>
      </li>

      <li>
        <RouterLink to="/todo"> ToDoリスト </RouterLink>
      </li>

      <li>
        <RouterLink to="/calculator"> 電卓 </RouterLink>
      </li>
    </ul>

    <h2>UI機能</h2>

    <ul>
      <li>
        <RouterLink to="/dark-mode"> ダークモード </RouterLink>
      </li>

      <li>
        <RouterLink to="/breadcrumb"> パンくずリスト </RouterLink>
      </li>
    </ul>
  </div>
</template>
