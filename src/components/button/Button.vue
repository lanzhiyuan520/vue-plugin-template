<template>
    <div class="lan-button">
        <span>{{$slots.default[0].text || '按钮'}}</span>
        <!--<img src="../../../assets/a.jpg" />-->
    </div>
</template>

<script>
  export default {
    name: "lButton",
  }
</script>

<style>
    .lan-button {
        display: inline-block;
        padding: 6px 12px;
        background-color: dodgerblue;
        border-radius: 6px;
        font-size: 14px;
        color:#fff;
        cursor: pointer;
    }
    img {
        width: 20px;
        height: 20px;
    }
</style>
