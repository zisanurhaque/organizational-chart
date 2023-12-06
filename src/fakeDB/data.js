import Image1 from "../assets/images/1.jpeg";
import Image2 from "../assets/images/2.jpeg";
import Image3 from "../assets/images/3.jpeg";
import Image4 from "../assets/images/4.jpeg";
import Image5 from "../assets/images/5.jpeg";
import Image6 from "../assets/images/6.jpeg";
import Image7 from "../assets/images/7.jpeg";
import Image8 from "../assets/images/8.jpeg";
import Image9 from "../assets/images/9.jpeg";
import Image10 from "../assets/images/10.jpeg";

export const profiles = [
  {
    name: "John Doe",
    thumbnail: Image1,
    position: "Board Of Director",
    child: [
      {
        name: "Ben Grasha",
        thumbnail: Image2,
        position: "CEO",
        child: [
          {
            name: "Russel Ross",
            thumbnail: Image4,
            position: "Staff Director",
            child: [
              {
                name: "Micky Neilands",
                thumbnail: Image5,
                position: "Finance Director",
                child: [
                  {
                    name: "Micky Neilands",
                    thumbnail: Image8,
                    position: "Finance Sepcialist",
                  },
                  {
                    name: "Micky Neilands",
                    thumbnail: Image9,
                    position: "Finance Sepcialist",
                  },
                ],
              },
              {
                name: "Mattew Gobeaux",
                thumbnail: Image6,
                position: "Fundraising Director",
                child: [
                  {
                    name: "Micky Neilands",
                    thumbnail: Image10,
                    position: "Fundraising Sepcialist",
                  },
                  {
                    name: "Micky Neilands",
                    thumbnail: Image3,
                    position: "Fundraising Sepcialist",
                  },
                ],
              },
              {
                name: "Bartholemy Durgan",
                thumbnail: Image7,
                position: "Program Director",
                child: [
                  {
                    name: "Micky Neilands",
                    thumbnail: Image5,
                    position: "Program Sepcialist",
                  },
                  {
                    name: "Micky Neilands",
                    thumbnail: Image8,
                    position: "Program Sepcialist",
                  },
                ],
              },
            ],
          },
          {
            name: "David Sellner",
            thumbnail: Image3,
            position: "Volunteer Director",
          },
        ],
      },
    ],
  },
];
