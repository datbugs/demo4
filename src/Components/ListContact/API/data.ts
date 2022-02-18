import {IDataModelType, IDataDetailModel} from '../interface'

export const dataModels: {[k: string]: IDataModelType} = {
	0: {
		model_id: 1,
		model_name: 'solid_cone',
		model_type: 'cone',
		latitude: 13,
		longitude: 1134456543,
		height: 17,
		size: {
			x: 1,
			y: 3,
		},
	},
	1: {
		model_id: 2,
		model_name: 'cabine_mount',
		model_type: 'cone',
		latitude: 123,
		longitude: 113432543,
		height: 17,
		size: {
			x: 2,
			y: 2,
		},
	},
	2: {
		model_id: 3,
		model_name: 'marine_mount',
		model_type: 'cone',
		latitude: 2341,
		longitude: 1134883,
		height: 17,
		size: {
			x: 5,
			y: 4,
		},
	},
	3: {
		model_id: 4,
		model_name: 'hydraulic_mount',
		model_type: 'cone',
		latitude: 151111,
		longitude: 723432543,
		height: 17,
		size: {
			x: 6,
			y: 2,
		},
	},
	4: {
		model_id: 5,
		model_name: 'circula_cone',
		model_type: 'cone',
		latitude: 134261,
		longitude: 113867543,
		height: 17,
		size: {
			x: 7,
			y: 3,
		},
	},
	5: {
		model_id: 6,
		model_name: 'square_cone',
		model_type: 'cone',
		latitude: 13121461,
		longitude: 137867543,
		height: 17,
		size: {
			x: 2,
			y: 5,
		},
	},
};

// export const dataDetailModel: {[k: number]: IDataDetailModel} = {
// 	0: {
// 		id: 1,
// 		name: 'solid_cone',
// 		type: 'cone',
// 		position: {
// 			latitude: 13,
// 			longitude: 1134456543,
// 			altitude: 17,
// 		},
// 		size: {
// 			x: 1,
// 			y: 3,
// 		},
// 	},
// 	1: {
// 		id: 2,
// 		name: 'cabine_mount',
// 		type: 'cone',
// 		position: {
// 			latitude: 123,
// 			longitude: 113432543,
// 			altitude: 17,
// 		},
// 		size: {
// 			x: 2,
// 			y: 2,
// 		},
// 	},
// 	2: {
// 		id: 3,
// 		name: 'marine_mount',
// 		type: 'cone',
// 		position: {
// 			latitude: 2341,
// 			longitude: 1134883,
// 			altitude: 17,
// 		},
// 		size: {
// 			x: 5,
// 			y: 4,
// 		},
// 	},
// 	3: {
// 		id: 4,
// 		name: 'hydraulic_mount',
// 		type: 'cone',
// 		position: {
// 			latitude: 151111,
// 			longitude: 723432543,
// 			altitude: 17,
// 		},
// 		size: {
// 			x: 6,
// 			y: 2,
// 		},
// 	},
// 	4: {
// 		id: 5,
// 		name: 'circula_cone',
// 		type: 'cone',
// 		position: {
// 			latitude: 134261,
// 			longitude: 113867543,
// 			altitude: 17,
// 		},
// 		size: {
// 			x: 7,
// 			y: 3,
// 		},
// 	},
// 	5: {
// 		id: 6,
// 		name: 'square_cone',
// 		type: 'cone',
// 		position: {
// 			latitude: 13121461,
// 			longitude: 137867543,
// 			altitude: 17,
// 		},
// 		size: {
// 			x: 2,
// 			y: 5,
// 		},
// 	},
// };