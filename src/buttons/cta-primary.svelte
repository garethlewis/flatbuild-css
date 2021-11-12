<script>
    export let text = 'Change Me!';
    import mediumright from '../icons/chevrons/mediumright.svg';
</script>

<div class="w-full cursor-pointer group">
    <div class="w-10/12 transition-all duration-200 sm:inline-block group-hover:w-11/12">
        <div class="flex justify-center px-4 py-2 bg-aldermore-yellow">
            <p>{text}</p>
            <span class="flex items-center">
                <div class="flex justify-center w-5 h-5 transition-all duration-200 transform group-hover:translate-x-3">
                    {@html mediumright}
                </div>
            </span>
        </div>
    </div>
</div>

<style>
</style>