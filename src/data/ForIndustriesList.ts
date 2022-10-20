import back1 from "@/assets/images/industries-bg1.png"
import back2 from "@/assets/images/industries-bg2.png"
import back3 from "@/assets/images/industries-bg3.png"
import back4 from "@/assets/images/industries-bg4.png"
import back5 from "@/assets/images/industries-bg5.png"
import back6 from "@/assets/images/industries-bg6.png"


interface IForIndustriesItem {
	readonly id: number;
	title: string;
	backUrl: string;
}

export const ForIndustriesList: IForIndustriesItem[] = [
	{
		id:1,
		title: 'Жилой сектор',
		backUrl: back1
	},
	{
		id:2,
		title: 'Бизнес центры',
		backUrl: back2
	},
	{
		id:3,
		title: 'Торговые центры',
		backUrl: back3
	},
	{
		id:4,
		title: 'Медицинские центры',
		backUrl: back4
	},
	{
		id:5,
		title: 'Гос. учреждения',
		backUrl: back5
	},
	{
		id:6,
		title: 'Отели',
		backUrl: back6
	}
]