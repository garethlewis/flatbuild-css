<script>
    export let text = 'Change Me!';
</script>

<div class="w-full cursor-pointer outer group">
    <div class="w-10/12 transition-all duration-200 sm:inline-block group-hover:w-11/12">
        <div class="flex justify-center px-4 py-2 transition-all duration-200 bg-aldermore-yellow active:bg-black active:text-white">
            <p class="">{text}</p>
            <span class="flex items-center">
                <div class="flex justify-center w-5 h-5 transition-all duration-200 transform group-hover:translate-x-3">
                    <!-- <img src={mediumright} alt="Chevron Right" class="svg"/> -->
                    <!-- TODO change the stroke with tailwind rules -->
                    <svg width="10" height="18" viewBox="0 0 10 18" stroke="#020203" xmlns="http://www.w3.org/2000/svg" class="svg">
                        <path d="M1 1L9.05605 8.95"stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 16.9L9.05605 8.95001" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </span>
        </div>
    </div>
</div>

<style>
    .svg {
        transition: all 0.2s;
    }

    .outer:active .svg {
        stroke: white;
    }
</style>