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
Is driven yelling to his caves beneath Mount Hecla.`, `O THOU with dewy locks, who lookest down
Through the clear windows of the morning, turn
Thine angel eyes upon our western isle,
Which in full choir hails thy approach, O Spring!

The hills tell one another, and the listening
Valleys hear; all our longing eyes are turn'd
Up to thy bright pavilions: issue forth
And let thy holy feet visit our clime!

Come o'er the eastern hills, and let our winds
Kiss thy perfumed garments; let us taste
Thy morn and evening breath; scatter thy pearls
Upon our lovesick land that mourns for thee.

O deck her forth with thy fair fingers; pour
Thy soft kisses on her bosom; and put
Thy golden crown upon her languish'd head,
Whose modest tresses are bound up for thee.`, `O Thou who passest thro’ our vallies in
Thy strength, curb thy fierce steeds, allay the heat
That flames from their large nostrils! thou, O Summer,
Oft pitched’st here thy golden tent, and oft
Beneath our oaks hast slept, while we beheld
With joy, thy ruddy limbs and flourishing hair.

Beneath our thickest shades we oft have heard
Thy voice, when noon upon his fervid car
Rode o’er the deep of heaven; beside our springs
Sit down, and in our mossy vallies, on
Some bank beside a river clear, throw thy
Silk draperies off, and rush into the stream:
Our vallies love the Summer in his pride.

Our bards are fam’d who strike the silver wire:
Our youth are bolder than the southern swains:
Our maidens fairer in the sprightly dance:
We lack not songs, nor instruments of joy,
Nor echoes sweet, nor waters clear as heaven,
Nor laurel wreaths against the sultry heat.`, `O Autumn, laden with fruit, and stained
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
Hills fled from our sight; but left his golden load.`]

let textArrIndex = 0
let charIndex = 0

function type() {
    if (charIndex < textArr[textArrIndex].length) {
        typedTextSpan.textContent += textArr[textArrIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay)
    }
}

function nextPoem() {
    typedTextSpan.textContent = ''
    charIndex = 0
    textArrIndex++
    type()
}

document.getElementById('text-body').addEventListener('click', nextPoem)

type()