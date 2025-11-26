<script setup>
defineProps({
  codeList: Array,
  name: String
});

</script>

<template>
  <div class="code">
    <div class="code__top">
      <div class="code__circles">
        <div class="code__circle code__circle_red"></div>
        <div class="code__circle code__circle_orange"></div>
        <div class="code__circle code__circle_green"></div>
      </div>
    </div>
    <div class="code__content">
      <div class="code__title">
        <span class="code__text code__text_pink">const </span
        ><span class="code__text code__text_violet">{{name}} </span
        ><span class="code__text code__text_pink"> = </span
        ><span class="code__text code__text_grey">{</span>
      </div>
      <ul class="code__list">
        <li
          v-for="(contact, index) in codeList"
          :key="index"
          class="code__item"
        >

            <span class="code__text code__text_white"
              >{{ contact.title }}: </span
            >

          <ul v-if="Array.isArray(contact.name)" class="code__link-list">
            <li v-for="(name, index) in contact.name"
           :key="index" class="code__text code__text_skill">
              <span class="code__text code__text_grey"> '</span>{{ name }}<span class="code__text code__text_grey">',</span>
            </li>
          </ul> 

          <component v-else :is="contact.isLink === true ? 'a' : 'div'" class="code__link"
           :class=" { 'code__link-hover' : contact.isLink }"
          :href="contact.address" target="_blank">
          <span class="code__text code__text_grey"> '</span>
            <span class="code__text code__text_green">
                {{ contact.name }}</span
              >
              <span class="code__text code__text_grey">',</span>
          </component>
        </li>
      </ul>

      <span class="code__text code__text_grey">};</span>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/css/variables" as v;

.code {
  position: relative;
  border-radius: 13px;
  background-color: v.$bg-color;
      max-width: 700px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 13px;
    padding: 2px;
    background: linear-gradient(45deg, #007f45, #00dc82, #052e16, #b3f5d1);
    background-size: 400% 400%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: superSlowGradient 15s ease-in-out infinite;
    pointer-events: none;
  }

  &__top {
    border-bottom: 1px solid #00dc82;
    padding: 20px 30px;
  }

  &__circles {
    display: flex;
    gap: 10px;
  }

  &__circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;

    &_red {
      background-color: #ef4444;
    }
    &_orange {
      background-color: #fb923c;
    }
    &_green {
      background-color: #4ade80;
    }
  }

  &__content {
    padding: 30px;
  }

  &__title {
    margin-bottom: 10px;
  }

  &__text {
    &_pink {
      color: #f472b6;
    }

    &_violet {
      color: #a78bfa;
    }

    &_green {
      color: v.$main-green;
    }
    &_grey {
      color: #9ca3af;
    }
    &_white {
      color: v.$text-color;
      margin-right: 5px;
    }

    &_skill {
      color: #22d3ee;
      margin-right: 5px;
    }
  }

  &__list {
    margin-left: 30px;

    @media (max-width: 450px) {
      margin-left: 15px;
      font-size: 14px;
    }
  }

  &__item {
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  &__link {
    &-hover:hover {
    text-decoration: underline v.$main-green;
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
    }
    
  }
}

@keyframes superSlowGradient {
  0%,
  100% {
    background-position: 0% 50%;
    filter: hue-rotate(0deg);
  }
  50% {
    background-position: 100% 50%;
    filter: hue-rotate(30deg);
  }
}
</style>
