<template>
    <div id="hw_index">
        <my-header></my-header>
        <my-subHeader></my-subHeader>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import myHeader from '@/components/header'
    import mySubHeader from '@/components/sub_header'
    import myFooter from '@/components/footer'
    export default{
        data(){
            return{

            }
        },
        components:{myHeader,myFooter,mySubHeader}
    }
</script>

<style>

</style>



