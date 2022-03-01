const typedTextSpan = document.querySelector('.typed-text')

const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000;

const textArr = [`O Winter! bar thine adamantine doors:
The north is thine; there hast thou built thy dark
Deep-founded habitation. Shake not thy roofs
Nor bend thy pillars with thine iron car.

He hears me not, but o’er the yawning deep
Rides heavy; his storms are unchain’d, sheathed
In ribbed steel; I dare not lift mine eyes;
For he hath rear’d his scepter o’er the world.

Lo! now the direful monster, whose skin clings
To his strong bones, strides o’er the groaning rocks:
He withers all in silence, and in his hand
Unclothes the earth, and freezes up frail life.

He takes his seat upon the cliffs, the mariner
Cries in vain. Poor little wretch! that deal’st
With storms; till heaven smiles, and the monster
Is driven yelling to his caves beneath Mount Hecla.`, `O Autumn, laden with fruit, and stained
With the blood of the grape, pass not, but sit
Beneath my shady roof; there thou mayst rest,
And tune thy jolly voice to my fresh pipe,
And all the daughters of the year shall dance!
Sing now the lusty song of fruits and flowers.

"The narrow bud opens her beauties to
The sun, and love runs in her thrilling veins;
Blossoms hang round the brows of Morning, and
Flourish down the bright cheek of modest Eve,
Till clust'ring Summer breaks forth into singing,
And feather'd clouds strew flowers round her head.

"The spirits of the air live on the smells
Of fruit; and Joy, with pinions light, roves round
The gardens, or sits singing in the trees."
Thus sang the jolly Autumn as he sat;
Then rose, girded himself, and o'er the bleak
Hills fled from our sight; but left his golden load.`, "no", "please"]

let textArrIndex = 0
let charIndex = 0

function type() {
    if (charIndex < textArr[textArrIndex].length) {
        console.log("hi")
        typedTextSpan.textContent += textArr[textArrIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay)
    }
}

// document.activeElement('click', () => textArrIndex++)

type()