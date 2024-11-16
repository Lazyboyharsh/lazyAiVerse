// Sample tool list - replace with your actual list 
const tools = [
    { name: "Canva AI", link: "https://www.canva.com/" },
    { name: "Farmer AI", link: "https://www.framer.com/" },
    { name: "Websim AI", link: "https://websim.ai/" },
    { name: "Notion", link: "https://www.notion.so/help/guides/build-a-website-with-notion-in-seconds-no-coding-required" },
    { name: "10 Web", link: "https://10web.io/" },
    { name: "Durable AI", link: "https://durable.co/" },
    { name: "Website.generator", link: "https://www.hubspot.com/marketing/ai-website-generator-am?irclickid=3GiwOQyJjxyKWAeVgq0-23dAUkCyuQRtqza9V40&irgwc=1&mpid=5293708&utm_id=am5293708&utm_medium=am&utm_source=am5293708&utm_campaign=amcid_3GiwOQyJjxyKWAeVgq0-23dAUkCyuQRtqza9V40_irpid_5293708" },
    { name: "Screenshot to code", link: "https://screenshottocode.com/" },
    { name: "Photoshop AI", link: "https://www.adobe.com/products/photoshop.html?clickref=1100lzD7sYxQ&mv=affiliate&mv2=pz&as_camptype=&as_channel=affiliate&as_source=partnerize&as_campaign" },
    { name: "Misgif AI", link: "https://misgif.app/" },
    { name: "Adobe Firefly 3", link: "https://firefly.adobe.com/?clickref=1101lzIJNhJs&mv=affiliate&mv2=pz&as_camptype=&as_channel=affiliate&as_source=partnerize&as_campaign" },
    { name: "Magnific AI", link: "https://magnific.ai/" },
    { name: "Pixelcut", link: "https://www.pixelcut.ai/" },
    { name: "Remove bg", link: "https://www.remove.bg/" },
    { name: "Faceswapper AI", link: "https://faceswapper.ai/?ref" },
    { name: "WatermarkRemover.io", link: "https://www.watermarkremover.io/?fp_ref=partnerstephens742" },
    { name: "Snapedit", link: "https://snapedit.app/" },
    { name: "Midjourney", link: "https://www.midjourney.com/home" },
    { name: "Stable Diffusion", link: "https://stablediffusionweb.com/" },
    { name: "Leonardo AI", link: "https://app.leonardo.ai/auth/login?callbackUrl=%2F%3Fvia%3D" },
    { name: "Flux.1", link: "https://blackforestlabs.ai/" },
    { name: "Ideogram AI", link: "https://ideogram.ai/t/explore" },
    { name: "Freepik", link: "https://www.freepik.com/" },
    { name: "Lexica Art", link: "https://lexica.art/" },
    { name: "Civit AI", link: "https://civitai.com/" },
    { name: "Dall-E-3", link: "https://openai.com/index/dall-e-3/" },
    { name: "Krea AI", link: "https://www.krea.ai/home" },
    { name: "Rytr", link: "https://rytr.me/?via" },
    { name: "Quillbot", link: "https://quillbot.com/?utm_campaign=partnerstack&pscd=try.quillbot.com&ps_partner_key=cGFydG5lcnN0ZXBoZW5zNzQy&ps_xid=dAk7yxHjjBKEc3&gsxid=dAk7yxHjjBKEc3&gspk=cGFydG5lcnN0ZXBoZW5zNzQy" },
    { name: "Content Shake AI", link: "https://www.semrush.com/contentshake/?irclickid=3GiwOQyJjxyKWAeVgq0-23dAUkCyvIQtqza9V40&utm_source=affiliate&utm_Medium=impact&utm_campaign=5293708&utm_terms=&utm_content=&irgwc=1&utm_medium=impact&utm_term=" },
    { name: "Undetectable.AI", link: "https://undetectable.ai/?_by" },
    { name: "WriteSonic", link: "https://writesonic.com/?fpr" },
    { name: "Content AI writer", link: "https://www.hubspot.com/ai-content-writer/am?irclickid=3GiwOQyJjxyKWAeVgq0-23dAUkCyvN3Fqza9V40&irgwc=1&mpid=5293708&utm_id=am5293708&utm_medium=am&utm_source=am5293708&utm_campaign=amcid_3GiwOQyJjxyKWAeVgq0-23dAUkCyvN3Fqza9V40_irpid_5293708" },
    { name: "Jasper AI", link: "https://www.jasper.ai/" },
    { name: "Paraphrasing Tool", link: "https://paraphrasingtool.ai/" },
    { name: "Gptzero", link: "https://gptzero.me/" },
    { name: "Smodin", link: "https://smodin.io/" },
    { name: "Sora AI", link: "https://openai.com/index/sora/" },
    { name: "HeyGen", link: "https://heygen.com/?sid=rewardful&via" },
    { name: "LumaLab AI", link: "https://lumalabs.ai/dream-machine" },
    { name: "Invideo AI", link: "https://invideo.io/?irclickid=3GiwOQyJjxyKWAeVgq0-23dAUkCyvK21qza9V40&mpid=5293708&irgwc=1" },
    { name: "Viggle AI", link: "https://www.viggle.ai/home" },
    { name: "Conch Video", link: "https://hailuoai.com/video" },
    { name: "Fliki", link: "https://fliki.ai/?via=aixploria" },
    { name: "Synthesia", link: "https://synthesia.io/?via" },
    { name: "Emu Video", link: "https://emu-video.metademolab.com/" },
    { name: "Kaiber AI", link: "https://kaiber.ai/" },
    { name: "Perplexity Ai", link: "https://www.perplexity.ai/pro?referral_code=74L0DIRK" },
    { name: "Globe.Engineer", link: "https://explorer.globe.engineer/" },
    { name: "Poe.com", link: "https://poe.com/login" },
    { name: "Chatpdf", link: "https://www.chatpdf.com/?via" },
    { name: "Notion AI", link: "https://www.notion.so/product/ai?utm_source=affl&utm_medium=partnerstephens742&pscd=affiliate.notion.so&ps_partner_key=cGFydG5lcnN0ZXBoZW5zNzQy&ps_xid=s0sF0bNzT9Zgh1&gsxid=s0sF0bNzT9Zgh1&gspk=cGFydG5lcnN0ZXBoZW5zNzQy" },
    { name: "Fireflies AI", link: "https://fireflies.ai/?fpr" },
    { name: "DeepL", link: "https://www.deepl.com/en/translator" },
    { name: "Quizlet", link: "https://quizlet.com/gb" },
    { name: "WolframAlpha", link: "https://www.wolframalpha.com/" },
    { name: "Resoomer", link: "https://resoomer.com/" }
];

const toolList = document.getElementById('toolList');
const searchInput = document.getElementById('searchInput');
const notFound = document.getElementById('notFound');

// Populate the tool list with all tools initially
function populateToolList(filteredTools = tools) {
    toolList.innerHTML = ''; // Clear existing items
    filteredTools.forEach(tool => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = tool.link;
        a.target = "_blank"; // Open link in new tab
        a.textContent = tool.name;
        li.appendChild(a);
        toolList.appendChild(li);
    });
}

// Filter tools based on search input
function filterTools() {
    const searchTerm = searchInput.value.toLowerCase();

    // If searchTerm is empty, clear the tool list and return
    if (!searchTerm) {
        toolList.innerHTML = ''; // Clear the list
        notFound.style.display = 'none'; // Hide 'not found' message
        return;
    }

    const filteredTools = tools.filter(tool => tool.name.toLowerCase().includes(searchTerm));

    // Populate the tool list with filtered tools
    populateToolList(filteredTools);

    // Show 'not found' message if no tools are found
    notFound.style.display = filteredTools.length > 0 ? 'none' : 'block';
}

// Initial population of the tool list
populateToolList();

// Add event listener for search input
searchInput.addEventListener('focus', () => {
    toolList.style.display = 'block';
});

searchInput.addEventListener('blur', () => {
    setTimeout(() => {
        toolList.style.display = 'none';
    }, 200);
});

searchInput.addEventListener('input', filterTools);
