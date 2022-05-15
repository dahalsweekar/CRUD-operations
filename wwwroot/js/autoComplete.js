// JavaScript source code


    $(document).ready(function(){
               var autotags=[
    "Kathmandu",
    "Bhaktapur",
    "Lalitpur",
    "Pokhara",
    "Jhapa",
    "Ilam",
    "Taplejung",
    "Saptari",
    "Sindhuli",
    "Chitwan",
    "Nuwakot",
    "Okhaldhuga",
    "Lamjung",
    "Lumbini",
    "Gorkha",
    "Butwal",
    "Palpa",
    "Dolkha",
    "Palpa"
    ];
    $( "#address" ).autocomplete({
        source: autotags
            });
    });

