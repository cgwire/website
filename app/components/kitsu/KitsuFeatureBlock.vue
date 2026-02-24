<template>
    <div
        class="flexrow kitsu-feature-block"
        :class="direction === 'right' ? 'flexrow-reverse' : ''"
    >
        <div class="kitsu-feature-block-content">
            <h1>
                {{ $t(`kitsu feature ${featureKey} title`) }}
            </h1>
            <p>
                {{ $t(`kitsu feature ${featureKey} content`) }}
            </p>
        </div>
        <div>
            <div class="feature-img-wrapper" :class="color">
                <NuxtPicture
                    :src="'/images/kitsu/' + featureKey + '.png'"
                    alt=""
                    format="webp"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    featureKey: String,
    direction: String,
    color: {
        type: String,
        default: "green",
    },
});
</script>

<style scoped lang="stylus">
.kitsu-feature-block-content
  margin-right: 3em
  max-width: 400px
  width: 50%

.feature-img-wrapper
  border-radius: 20px
  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.2)
  max-width: 600px
  margin: 0 auto
  background-color: #c2f0ab
  padding: 40px 40px

  &.purple
    background-color: #e9e1ec

  &.blue
    background-color: #e0e8ff

  img
    border: 10px solid #ffffff66
    border-radius: 20px
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1)

.flexrow-reverse
  flex-direction: row-reverse
  justify-content: flex-end

  .kitsu-feature-block-content
    margin-left: 3em
    margin-right: 0

  .feature-img-wrapper
    background-color: #f9f6fd

.kitsu-feature-block
  padding: 1em
  margin-bottom: 8em

@media (max-width: 768px)
  .kitsu-feature-block
    flex-direction: column-reverse

  .kitsu-feature-block-content
    margin-right: 0
    margin-left: 0
    margin-top: 2em
    width: 100%

  .feature-img-wrapper
    padding: 10px
    width: 100%

  .flexrow-reverse

    .kitsu-feature-block-content
      margin-left: 0
</style>
