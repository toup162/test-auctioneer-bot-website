<script>
    import './main.css';
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import Discord from './Discord.svelte';
    import CommandList from './CommandList.svelte';
    import News from './News.svelte';

    const logo = 'logo.jpg';
    const altText = 'logo with pile of treasure';

</script>


<div class="w-full">

    <Header/>
    <News/>
    <Discord/>
    <CommandList/>
    <Footer/>

</div>
