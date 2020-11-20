<script>
    import './main.css';
    import Commands from "./Discord.svelte";
    import Footer from "./Footer.svelte";
    import Discord from "./Discord.svelte";
    import CommandList from "./CommandList.svelte";

    const src = 'logo.jpg'
    const altText = 'logo with pile of treasure'

</script>


<div class="w-full">
    <div class=" w-full bg-purple-900 shadow ">

        <img {src} class="inline-block ml-4 mt-4 mb-4 h-32 rounded-full border-4 border-purple-500" alt="{altText}">

        <div class="inline-block align-middle text-gray-100 text-4xl text-right uppercase titlecase">
            Buyer's

            Guide
        </div>
    </div>

        <Discord/>
        <CommandList/>
        <Footer/>

</div>
