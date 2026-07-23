// ======================================================
// Parent JSON
// ======================================================

const processes = [

    {
        process_id:1,
        process_title:"Adhoc Physical Inventory",
        icon:"icons/pallet1.svg",
        overview_video:"https://www.youtube.com/embed/jNQXAC9IVRw",
        system_video:"https://www.youtube.com/embed/jNQXAC9IVRw"
    },

    {
        process_id:2,
        process_title:"Inbound process",
        icon:"icons/forklift1.svg",
        overview_video:"WeScan_videos/Use Case 1 - Inbound Process.mp4",
        system_video:"WeScan_videos/Use Case 1 - Inbound Process.mp4"
    },
    
    {
        process_id:3,
        process_title:"Receiving process",
        icon:"icons/putaway1.svg",
        overview_video:"WeScan_videos/Use Case 2 - Receiving Process.mp4",
        system_video:"WeScan_videos/Use Case 2 - Receiving Process.mp4"
    },

    {
        process_id:4,
        process_title:"Putaway process",
        icon:"icons/warehouse2.svg",
        overview_video:"WeScan_videos/Use Case 3 - Putaway Process.mp4",
        system_video:"WeScan_videos/Use Case 3 - Putaway Process.mp4"
    },
        {
        process_id:5,
        process_title:"Allocation & Picking Process",
        icon:"icons/case_pick1.svg",
        overview_video:"WeScan_videos/Use Case 4 - Allocation & Picking Process.mp4",
        system_video:"WeScan_videos/Use Case 4 - Allocation & Picking Process.mp4"
    },
        {
        process_id:6,
        process_title:"Receipt of stock from CSN",
        icon:"icons/case_pick2.svg",
        overview_video:"WeScan_videos/Use Case 5 - Receipt of Stock from CSN.mp4",
        system_video:"WeScan_videos/Use Case 5 - Receipt of Stock from CSN.mp4"
    },

        {
        process_id:7,
        process_title:"Cycle Count",
        icon:"icons/case_count1.svg",
        overview_video:"WeScan_videos/Use Case 11 - Cycle count.mp4",
        system_video:"WeScan_videos/Use Case 11 - Cycle count.mp4"
    },
        {
        process_id:8,
        process_title:"Replenishment process",
        icon:"icons/rack1.svg",
        overview_video:"WeScan_videos/Use Case 12 - Replenishment.mp4",
        system_video:"WeScan_videos/Use Case 12 - Replenishment.mp4"
    }

];


// ======================================================
// Child JSON
// ======================================================

const processItems = [

    {
        process_id:1,
        item_id:1,
        sequence:1,
        content_type:"text",
        content:"This is process 1:"
    },

    {
        process_id:1,
        item_id:2,
        sequence:2,
        content_type:"ul",
        content:[
            "Sample a",
            "Sample b",
            "Sample c"
        ]
    },

    {
        process_id:1,
        item_id:3,
        sequence:3,
        content_type:"img",
        content:"icons/forklift1.svg"
    },

    {
        process_id:2,
        item_id:1,
        sequence:1,
        content_type:"text",
        content:"This is process 2."
    },

    {
        process_id:3,
        item_id:1,
        sequence:1,
        content_type:"text",
        content:"Welcome to process 3."
    },

    {
        process_id:4,
        item_id:1,
        sequence:1,
        content_type:"text",
        content:"Welcome to process 4."
    },

    {
    process_id:1,
    item_id:10,
    sequence:10,
    content_type:"carousel",
    content:"slides/adhoc_pi_1.jpg"
},

{
    process_id:1,
    item_id:11,
    sequence:11,
    content_type:"carousel",
    content:"slides/adhoc_pi_2.jpg"
},

{
    process_id:1,
    item_id:12,
    sequence:12,
    content_type:"carousel",
    content:"slides/adhoc_pi_3.jpg"
},

{
    process_id:1,
    item_id:13,
    sequence:13,
    content_type:"carousel",
    content:"slides/adhoc_pi_4.jpg"
},

{
    process_id:1,
    item_id:14,
    sequence:14,
    content_type:"carousel",
    content:"slides/adhoc_pi_5.jpg"
},

    {
    process_id:7,
    item_id:10,
    sequence:10,
    content_type:"carousel",
    content:"slides/cycle_count_1.jpg"
},

{
    process_id:7,
    item_id:11,
    sequence:11,
    content_type:"carousel",
    content:"slides/cycle_count_2.jpg"
},

{
    process_id:7,
    item_id:12,
    sequence:12,
    content_type:"carousel",
    content:"slides/cycle_count_3.jpg"
},

{
    process_id:7,
    item_id:13,
    sequence:13,
    content_type:"carousel",
    content:"slides/cycle_count_4.jpg"
},

{
    process_id:7,
    item_id:14,
    sequence:14,
    content_type:"carousel",
    content:"slides/cycle_count_5.jpg"
},
// 
    {
    process_id:2,
    item_id:10,
    sequence:10,
    content_type:"carousel",
    content:"slides/inbound_1.jpg"
},

{
    process_id:2,
    item_id:11,
    sequence:11,
    content_type:"carousel",
    content:"slides/inbound_2.jpg"
},

{
    process_id:2,
    item_id:12,
    sequence:12,
    content_type:"carousel",
    content:"slides/inbound_3.jpg"
},

{
    process_id:2,
    item_id:13,
    sequence:13,
    content_type:"carousel",
    content:"slides/inbound_4.jpg"
},
///
// 
    {
    process_id:3,
    item_id:10,
    sequence:10,
    content_type:"carousel",
    content:"slides/receiving_1.jpg"
},

{
    process_id:3,
    item_id:11,
    sequence:11,
    content_type:"carousel",
    content:"slides/inbound_2.jpg"
},

{
    process_id:3,
    item_id:12,
    sequence:12,
    content_type:"carousel",
    content:"slides/inbound_3.jpg"
},

{
    process_id:3,
    item_id:13,
    sequence:13,
    content_type:"carousel",
    content:"slides/inbound_4.jpg"
},
///

// 
    {
    process_id:4,
    item_id:10,
    sequence:10,
    content_type:"carousel",
    content:"slides/receipts_1.jpg"
},

{
    process_id:4,
    item_id:11,
    sequence:11,
    content_type:"carousel",
    content:"slides/inbound_2.jpg"
},

{
    process_id:4,
    item_id:12,
    sequence:12,
    content_type:"carousel",
    content:"slides/inbound_3.jpg"
},

{
    process_id:4,
    item_id:13,
    sequence:13,
    content_type:"carousel",
    content:"slides/inbound_4.jpg"
},

// 
    {
    process_id:6,
    item_id:10,
    sequence:10,
    content_type:"carousel",
    content:"slides/receipts_1.jpg"
},

{
    process_id:6,
    item_id:11,
    sequence:11,
    content_type:"carousel",
    content:"slides/inbound_2.jpg"
},

{
    process_id:6,
    item_id:12,
    sequence:12,
    content_type:"carousel",
    content:"slides/inbound_3.jpg"
},

{
    process_id:6,
    item_id:13,
    sequence:13,
    content_type:"carousel",
    content:"slides/inbound_4.jpg"
},

// 
    {
    process_id:5,
    item_id:10,
    sequence:10,
    content_type:"carousel",
    content:"slides/picking_1.jpg"
},

{
    process_id:5,
    item_id:11,
    sequence:11,
    content_type:"carousel",
    content:"slides/picking_2.jpg"
},

{
    process_id:5,
    item_id:12,
    sequence:12,
    content_type:"carousel",
    content:"slides/picking_3.jpg"
},

{
    process_id:5,
    item_id:13,
    sequence:13,
    content_type:"carousel",
    content:"slides/picking_4.jpg"
},

{
    process_id:5,
    item_id:14,
    sequence:14,
    content_type:"carousel",
    content:"slides/picking_5.jpg"
},
// 
    {
    process_id:8,
    item_id:10,
    sequence:10,
    content_type:"carousel",
    content:"slides/replen_1.jpg"
},

{
    process_id:8,
    item_id:11,
    sequence:11,
    content_type:"carousel",
    content:"slides/replen_2.jpg"
},
];


// ======================================================
// APPLICATION STATE
// ======================================================

let current_obj = processes.find(p => p.process_id === 1);
let carouselImages = [];
let carouselIndex = 0;

// ======================================================
// RENDER PAGE
// ======================================================

function refreshPage(){

    renderProcessCards();
    // renderProcessDescription();
    renderCarousel();
    // renderOverviewVideo();
    renderSystemVideo();
}


// ======================================================
// PROCESS CARDS
// ======================================================

function renderProcessCards(){

    const container = document.getElementById("process-container");

    container.innerHTML = "";

    processes.forEach(process=>{

        const card = document.createElement("div");
        card.className = "process-card";

        if(process.process_id === current_obj.process_id){
            card.classList.add("selected");
        }

        card.innerHTML = `
            <h3 class="process_card_title">${process.process_title}</h3>
            <br/>
             <br/>
            <img
                class="process-icon"
                src="${process.icon}"
                alt="${process.process_title}"
            >
        `;

        card.onclick = ()=>{

            current_obj = process;
            refreshPage();

        };

        container.appendChild(card);

    });

}


// ======================================================
// DESCRIPTION
// ======================================================

function renderProcessDescription(){

    const container = document.getElementById("process-description");

    container.innerHTML = "";

    const title = document.createElement("h2");
    title.innerHTML = `<strong>${current_obj.process_title}</strong>`;
    container.appendChild(title);

    const children = processItems
        .filter(item => item.process_id === current_obj.process_id)
        .sort((a,b)=>a.sequence-b.sequence);

    children.forEach(item=>{

        switch(item.content_type){

            case "text":

                const p = document.createElement("p");
                p.textContent = item.content;
                container.appendChild(p);

                break;

            case "img":

                const img = document.createElement("img");
                img.src = item.content;
                container.appendChild(img);

                break;

            case "ul":

                const ul = document.createElement("ul");

                item.content.forEach(text=>{

                    const li = document.createElement("li");
                    li.textContent = text;
                    ul.appendChild(li);

                });

                container.appendChild(ul);

                break;

        }

    });

}


// ======================================================
// PROCESS OVERVIEW VIDEO
// ======================================================

function renderOverviewVideo(){

    const container = document.getElementById("overview-video");

    container.innerHTML = `
        <video controls preload="metadata">
            <source src="${current_obj.overview_video}" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>
    `;

}


// ======================================================
// SYSTEM DEMO VIDEO
// ======================================================

function renderSystemVideo(){

    const container = document.getElementById("system-video");

    container.innerHTML = `
    <div class="video-container">
    <iframe width="2540" height="1046" src="https://www.youtube.com/embed/7DW1JsnXytU" title="Level 6 - Arpeggios - Bb Major and Bb Minor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    
    </div>     
`;

}





function renderCarousel(){

    carouselImages = processItems

        .filter(item =>
            item.process_id === current_obj.process_id &&
            item.content_type === "carousel"
        )

        .sort((a,b)=>a.sequence-b.sequence);

    carouselIndex = 0;

    updateCarousel();

}

function updateCarousel(){

    const img = document.getElementById("carousel-image");

    if(carouselImages.length === 0){

        img.src = "";
        img.alt = "No images available";

        return;

    }

    img.src = carouselImages[carouselIndex].content;

}

document.getElementById("carousel-left").onclick = function(){

    if(carouselImages.length === 0)
        return;

    carouselIndex--;

    if(carouselIndex < 0)
        carouselIndex = carouselImages.length - 1;

    updateCarousel();

};


document.getElementById("carousel-right").onclick = function(){

    if(carouselImages.length === 0)
        return;

    carouselIndex++;

    if(carouselIndex >= carouselImages.length)
        carouselIndex = 0;

    updateCarousel();

};




// ======================================================
// START
// ======================================================

refreshPage();

