<template>
  <ul class="split-page" v-if="count" ref="ul">
    <li class="item" v-show="currentIndex > 1"  @click="before"><a href="javascript: void 0;"><</a></li>
    
    <li class="item" v-if="isDot" @click="first" :class="{'current': currentIndex === 1}"><a href="javascript: void 0;">1</a></li>
    <li class="item" ref="fdli" v-show="isDot && currentIndex >= 5 "><a href="javascript: void 0;">...</a></li>
    
    <li v-for="(num, index) in canshow" :key="index" class="item" :class="{'current': num===currentIndex}" @click="changePage(num)" ref="nli">
      <a href="javascript: void 0;">{{num}}</a>
    </li>
    
    <li class="item" v-show="isDot && currentIndex <= count - 4"><a href="javascript: void 0;">...</a></li>
    <li class="item" v-if="isDot" :class="{'current': currentIndex === count}" @click="last"><a href="javascript: void 0;">{{count}}</a></li>
    <li class="item" v-show="currentIndex < count" @click="next"><a href="javascript: void 0;">></a></li>
  </ul>
</template>
<script>
  // import {createDom} from '@/common/api/dom'
  export default {
    props: {
      count: {
        type: Number,
        default: 0
      },
      limite: {
        type: Number,
        default: 7
      }
    },
    data() {
      return {
        currentIndex: 1,
        isDot: false,
        canshow: [],
        allPage: []
      }
    },
    created () {
      this._initC()
    },
    methods: {
      changePage(num) {
        this.currentIndex = num
        this.$emit('page', num)
      },
      next() {
        this.currentIndex = this.currentIndex + 1 <= this.count ? this.currentIndex + 1 : this.arrCount.length
        this.$emit('page', this.currentIndex)
      },
      before() {
        this.currentIndex = this.currentIndex - 1 >= 0 ? this.currentIndex - 1 : 0
        this.$emit('page', this.currentIndex)
      },
      first() {
        this.currentIndex = 1
        this.$emit('page', this.currentIndex)
      },
      last() {
        this.currentIndex = this.count
        this.$emit('page', this.currentIndex)
      },
      _initC() {
        for (let i = 2; i < this.count; i++) {
          this.allPage.push(i)
        }
        if (this.count > this.limite) {
          this.isDot = true
        }
        this._initDot()
      },
      _initDot() {
        if (this.isDot) {
          this.canshow = this.allPage.slice(0, 5)
        } else {
          this.allPage.push(this.count)
          this.allPage.unshift(1)
          this.canshow = this.allPage
        }
      }
    },
    watch: {
      currentIndex(newold) {
        if (this.isDot) {
          if (newold >= 5 && newold < this.count - 3) {
            this.canshow = this.allPage.slice(this.currentIndex - 4, this.currentIndex + 1)
          } else if (newold < 5) {
            this.canshow = this.allPage.slice(0, 5)
          } else if (newold >= this.count - 3) {
            this.canshow = this.allPage.slice(this.count - 6, this.count)
          }
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
.split-page
  margin: 20px
  .item
    overflow: hidden
    display: inline-block
    margin: 0 5px
    border-radius: 2px
    border: 1px solid #e7e7e7
    min-width: 30px
    font-size: 12px
    text-align: center
    line-height: 30px
    &.current
      border-color: #00bf8f
      background-color: #00bf8f
      font-weight: 700
      cursor: default
      a
        color: #fff
</style>
