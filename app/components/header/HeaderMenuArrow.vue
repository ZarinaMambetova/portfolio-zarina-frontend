<template>
<span class="navigation__link-arrow">
  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 5L10 8.74228e-07L4.37114e-07 0L5 5Z" fill="#808388" />
  </svg>
</span>
</template>

<style lang="scss" scoped>
$white: #FFFFFF;

.navigation__link {
  &-arrow {
    display: flex;
    align-items: center;
    margin-left: 5px;
  }

  &.router-link-active .navigation__link-arrow svg path {
    fill: $white;
  }
}

.navigation-dropdown {
  &__link {
    & .navigation__link-arrow {
      transform: rotate(270deg);
    }

    &:hover>.navigation__link-arrow svg path,
    &.router-link-active>.navigation__link-arrow svg path {
      fill: $white;
    }
  }

  &__item:hover>.navigation-dropdown__link>.navigation__link-arrow>svg path {
    fill: $white;
  }
}

.navigation__item:hover>.navigation__link .navigation__link-arrow svg path {
  fill: $white;
}
</style>
