<script>
    export let text = 'Change Me!';
    import mediumright from '../icons/chevrons/mediumright.svg';
</script>

<div class="group w-full cursor-pointer">
    <div class="sm:inline-block w-10/12 transition-all duration-200 group-hover:w-11/12">
        <div class="flex justify-center bg-aldermore-yellow px-4 py-2">
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