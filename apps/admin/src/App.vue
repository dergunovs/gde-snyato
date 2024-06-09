<template>
  <div class="logo">
    <span class="where">Где</span>
    <span>снято</span>
    <span class="question">?</span>
  </div>
</template>

<style lang="scss">
.logo {
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  text-align: center;
}

.where {
  color: var(--color-accent);
}

.question {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding-top: 4px;
  margin-top: -4px;
  color: var(--color-white);
  background-color: var(--color-primary);
  border-radius: 50%;
}
</style>
