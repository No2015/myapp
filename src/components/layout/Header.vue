<template>
    <div class="header">
        <div class="header-content">
            <ul class="flex-box padt4 lh15">
                <li>
                    <a href="javascript:;" class="back-btn"></a>
                </li>
                <li class="flex-item-3">
                    <p class="tc font62 bjs-color-white">{{ $route.meta.title }}</p>
                </li>
                <li class="tr"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            msg: 'Welcome to BJS.BI'
        }
    }
}
</script>
