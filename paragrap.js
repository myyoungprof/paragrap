const text = [
    "Harvard University is a private Ivy League research university in Cambridge, Massachusetts.Founded in 1636 as Harvard College and named for its first benefactor, the Puritan clergyman John Harvard, it is the oldest institution of higher learning in the United States and among the most prestigious in the world.<br></br>",

    "The Massachusetts Institute of Technology (MIT) is a private land-grant research university in Cambridge, Massachusetts. Established in 1861, MIT has since played a key role in the development of modern technology and science, ranking it among the top academic institutions in the world.<br></br>",

    "Stanford University, officially Leland Stanford Junior University, is a private research university located in the census-designated place of Stanford, California, near the city of Palo Alto. The campus occupies 8,180 acres (3,310 hectares), among the largest in the United States, and enrolls over 17,000 students. Stanford is ranked among the top universities in the world.<br></br>",

    "The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world and the world's second-oldest university in continuous operation. It grew rapidly from 1167 when Henry II banned English students from attending the University of Paris.<br></br><br></br>",

    "The California Institute of Technology (branded as Caltech) is a private research university in Pasadena, California. The university is known for its strength in science and engineering, and is among a small group of institutes of technology in the United States which is primarily devoted to the instruction of pure and applied sciences.<br></br>",

    "The University of Cambridge is a collegiate research university in Cambridge, United Kingdom. Founded in 1209 and granted a royal charter by Henry III in 1231, Cambridge is the world's third-oldest surviving university. The university grew out of an association of scholars who left the University of Oxford after a dispute with the townspeople.<br></br>",

    "The University of California, Berkeley (UC Berkeley, Berkeley, Cal, or California) is a public land-grant research university in Berkeley, California. Established in 1868 as the University of California, it is the state's first land-grant university and the first campus of the University of California system<br></br>",

    "Princeton University is a private Ivy League research university in Princeton, New Jersey. Founded in 1746 in Elizabeth as the College of New Jersey, Princeton is the fourth-oldest institution of higher education in the United States and one of the nine colonial colleges chartered before the American Revolution.<br></br>",

    "Yale University is a private Ivy League research university in New Haven, Connecticut. Founded in 1701 as the Collegiate School, it is the third-oldest institution of higher education in the United States and among the most prestigious in the world.<br></br>",

    "The University of Washington (UW, simply Washington, or informally U-Dub) is a public research university in Seattle, Washington.",
   
    "The University of Washington (UW, simply Washington, or informally U-Dub) is a public research university in Seattle, Washington.",

    "Founded in 1861, Washington is one of the oldest universities on the West Coast; it was established in Seattle approximately a decade after the city's founding."
]


const form = document.querySelector(".form")
const amount = document.getElementById("fname")
const result = document.querySelector(".generate")
output = document.querySelector(".output")


form.addEventListener ("submit", function(e){
e.preventDefault()

const fish = parseInt(amount.value)

const random = Math.floor(Math.random()* text.length)

if(isNaN(fish) || fish<= 0 || fish > 12 ){

    output.innerHTML = `<article class="output">${text[random]}</article>`
}

else{
    temText = text.slice(0, fish)
    temText = temText.map(function(item){
        return `<article class="output">${item}</article>`
    })
    .join("")

    output.innerHTML= temText
}

})
