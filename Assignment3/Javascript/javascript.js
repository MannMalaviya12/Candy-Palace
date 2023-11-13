document.addEventListener("DOMContentLoaded", function () {
    // Code for populating candies
    const candyContainer = document.getElementById("candyContainer");

    // Sample candy data
    const candies = [
        { name: "Sneakers", imageUrl: "https://tse2.mm.bing.net/th?id=OIP.jbjKWbmM0sdHL52HP9wfwAHaD6&pid=Api&P=0&h=180" },
        { name: "Mars", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.XOLS5Ces1v5_8L9xOK00JQHaHa&pid=Api&P=0&h=180https://via.placeholder.com/150" },
        { name: "Reese's", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.BZgUHoU49R2Jfxbx2yCbwgHaHa&pid=Api&P=0&h=180" },
        { name: "Dairy Milk", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.cm0vmc24uC585ok_lbFlrAHaD4&pid=Api&P=0&h=180" },
        { name: "Kit-Kat", imageUrl: "https://tse2.mm.bing.net/th?id=OIP.UDUxU7aNSxnQog-oOgD8ywHaDe&pid=Api&P=0&h=180" },
        { name: "Haz-5Star-Bar", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.alpXK7p7hSZszs-8-wKDyAHaEJ&pid=Api&P=0&h=180" },
        { name: "Skittles", imageUrl: "https://tse2.mm.bing.net/th?id=OIP.gkkknhKzbWZ5i6zub6wwzwHaEK&pid=Api&P=0&h=180" },
        { name: "m&m's", imageUrl: "https://i.pinimg.com/474x/85/93/71/859371a15d45dbeb35196b9c3b518c2a.jpg" },
        { name: "Ferero Rocher", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.zWG-RkzYa05ydMwtPSjNQAHaHZ&pid=Api&P=0&h=180" },
        { name: "Toblerone", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.dk05swVfnQMWpas2mbw6sAHaEr&pid=Api&P=0&h=180" },
        { name: "Jolly Rancher's", imageUrl: "https://tse2.mm.bing.net/th?id=OIP.z5TP1y4MxZfx6H67aGeWigHaHa&pid=Api&P=0&h=180" },
        { name: "Milky Bar", imageUrl: "https://tse3.mm.bing.net/th?id=OIP.3eh2W1syyDcauJLtSptp2gHaE8&pid=Api&P=0&h=180" },
        // Add more candies as needed
    ];

    // Populate candyContainer with candies
    candies.forEach(candy => {
        const candyDiv = document.createElement("div");
        candyDiv.classList.add("candy");

        const candyImg = document.createElement("img");
        candyImg.src = candy.imageUrl;
        candyImg.alt = candy.name;

        const candyName = document.createElement("p");
        candyName.textContent = candy.name;

        candyDiv.appendChild(candyImg);
        candyDiv.appendChild(candyName);

        candyContainer.appendChild(candyDiv);
    });

    // Code for populating Halloween candies
    const halloweenCandyContainer = document.getElementById("halloweenCandyContainer");

    const halloweenCandies = [
        { name: "Horror M&M's", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.PuweD6LUnyXwCnJymv5t4QHaFw&pid=Api&P=0&h=180" },
        { name: "Ring Pops", imageUrl: "https://tse2.mm.bing.net/th?id=OIP.k-4n8zeiTAYk27eObu2VmwHaE8&pid=Api&P=0&h=180" },
        { name: "Reese's PumpKins", imageUrl: "https://i5.walmartimages.com/asr/0081108b-e512-429e-ab55-fc80f9d980f5.58a63cea42728676feb4eb6ce93c7428.jpeg" },
        { name: "Sneaker Halloween Bar", imageUrl: "https://i5.walmartimages.com/asr/1f4ac218-60de-477d-b2a5-1a9baaa2014c.a17f49dc5d2b4797df14048001c01334.jpeg" },
        { name: "Milky Halloween Guy", imageUrl: "https://digitalcontent.api.tesco.com/v1/media/ghs/snapshotimagehandler_613255663.jpeg?h=540&w=540" },
    ];

    halloweenCandies.forEach(halloweenCandy => {
        const halloweenCandyDiv = document.createElement("div");
        halloweenCandyDiv.classList.add("halloween-candy");

        const halloweenCandyImg = document.createElement("img");
        halloweenCandyImg.src = halloweenCandy.imageUrl;
        halloweenCandyImg.alt = halloweenCandy.name;

        const halloweenCandyName = document.createElement("p");
        halloweenCandyName.textContent = halloweenCandy.name;

        halloweenCandyDiv.appendChild(halloweenCandyImg);
        halloweenCandyDiv.appendChild(halloweenCandyName);

        halloweenCandyContainer.appendChild(halloweenCandyDiv);
    });

    // Code for populating Best-Sellers
    const bestSellerContainer = document.getElementById("bestSellerContainer");

    // Sample best-seller data
    const bestSellers = [
        { name: "Ferero Rocher", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.zWG-RkzYa05ydMwtPSjNQAHaHZ&pid=Api&P=0&h=180" },
        { name: "Mars", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.XOLS5Ces1v5_8L9xOK00JQHaHa&pid=Api&P=0&h=180https://via.placeholder.com/150" },
        { name: "Reese's", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.BZgUHoU49R2Jfxbx2yCbwgHaHa&pid=Api&P=0&h=180" },
        { name: "Haz-5Star-Bar", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.alpXK7p7hSZszs-8-wKDyAHaEJ&pid=Api&P=0&h=180" },
        { name: "Milky Bar", imageUrl: "https://tse3.mm.bing.net/th?id=OIP.3eh2W1syyDcauJLtSptp2gHaE8&pid=Api&P=0&h=180" },
        // Add more best-sellers as needed
    ];

    // Populate bestSellerContainer with best-sellers
    bestSellers.forEach(bestSeller => {
        const bestSellerDiv = document.createElement("div");
        bestSellerDiv.classList.add("best-seller");

        const bestSellerImg = document.createElement("img");
        bestSellerImg.src = bestSeller.imageUrl;
        bestSellerImg.alt = bestSeller.name;

        const bestSellerName = document.createElement("p");
        bestSellerName.textContent = bestSeller.name;

        bestSellerDiv.appendChild(bestSellerImg);
        bestSellerDiv.appendChild(bestSellerName);

        bestSellerContainer.appendChild(bestSellerDiv);
    });

    // Code for sliding in the navigation bar
    const navUl = document.querySelector("nav ul");
    navUl.classList.add("loaded");

    const contactForm = document.querySelector(".footer-contact-form form");

    contactForm.addEventListener("submit", function (event) {
        // Prevent the actual form submission
        event.preventDefault();

        // Simulate form submission (you can add your logic here)
        alert("Form submitted! (Simulation)");

        // Clear form fields
        contactForm.reset();
    });

});
