"use strict";

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#submit').addEventListener('click', function (e) {
        e.preventDefault();
        let company = document.querySelector('#company').value;
        let mybusiness = document.querySelector('#mybusiness').value;
        let domain = document.querySelector('#domain').value;
        let meta = document.querySelector('#meta').value;
        let logo = document.querySelector('#logo').value;

        let rating_value = parseFloat(document.querySelector('#average').value);
        let rating_best = parseFloat(document.querySelector('#best').value);

        let rating_worst = parseFloat(document.querySelector('#worst').value);
        let rating_count = parseFloat(document.querySelector('#count').value);

        let reviews_names = document.querySelectorAll('.name');
        let reviews_ratings = document.querySelectorAll('.rating');
        let reviews_descriptions = document.querySelectorAll('.description');


        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear() + 1;
        let script = JSON.stringify( {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": company,
            "description": meta,
            "brand": {
                "@type": "Organization",
                "url": `https://${domain}?utm_source=google&utm_medium=local&utm_campaign=gmb_website`,
                "name": company
            },
            "image": logo,
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": rating_value,
                "bestRating": rating_best,
                "worstRating": rating_worst,
                "ratingCount": rating_count
            },
            "review": [
                {
                    "@type": "Review",
                    "description": reviews_descriptions[0].value,
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": parseFloat(reviews_ratings[0].value),
                        "bestRating": 5,
                        "worstRating": 1
                    },
                    "author": {
                        "@type": "Person",
                        "name": reviews_names[0].value
                    }
                },
                {
                    "@type": "Review",
                    "description": reviews_descriptions[1].value,
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": parseFloat(reviews_ratings[1].value),
                        "bestRating": 5,
                        "worstRating": 1
                    },
                    "author": {
                        "@type": "Person",
                        "name": reviews_names[1].value
                    }
                },
                {
                    "@type": "Review",
                    "description": reviews_descriptions[2].value,
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": parseFloat(reviews_ratings[2].value),
                        "bestRating": 5,
                        "worstRating": 1
                    },
                    "author": {
                        "@type": "Person",
                        "name": reviews_names[2].value
                    }
                },
                {
                    "@type": "Review",
                    "description": reviews_descriptions[3].value,
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": parseFloat(reviews_ratings[3].value),
                        "bestRating": 5,
                        "worstRating": 1
                    },
                    "author": {
                        "@type": "Person",
                        "name": reviews_names[3].value
                    }
                },
                {
                    "@type": "Review",
                    "description": reviews_descriptions[4].value,
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": parseFloat(reviews_ratings[4].value),
                        "bestRating": 5,
                        "worstRating": 1
                    },
                    "author": {
                        "@type": "Person",
                        "name": reviews_names[4].value
                    }
                },
            ],
            "sku": domain,
            "url": `https://${domain}?utm_source=google&utm_medium=local&utm_campaign=gmb_website`,
            "offers": {
                "@type": "Offer",
                "url": `https://${domain}?utm_source=google&utm_medium=local&utm_campaign=gmb_website`,
                "price": "95",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": yyyy + '-' + mm + '-' + dd
            },
            "gtin8": "00000000"
        });
        document.querySelector('#result').innerText = `
                        <style>.wae-wrapper{display:flex;flex-flow:column;justify-content:center}.wae-stars{display:flex;justify-content:center}.wae-star{background-color:#f5ae0a;width:1.5rem;height:1.5rem;clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);display:inline-block}.wae-rating{text-align:center}</style>
                        <a rel="noopener noreferrer" target="_blank" href="${mybusiness}">        
                                <div class="wae-stars">
                                    <div class="wae-star"></div>
                                    <div class="wae-star"></div>
                                    <div class="wae-star"></div>
                                    <div class="wae-star"></div>
                                    <div class="wae-star"></div>
                                </div>
                                <div class="wae-rating">${rating_value} von 5 Sternen</div>
                                
                            </a>
                            <script type="application/ld+json">${script}</script>`;
    })

});