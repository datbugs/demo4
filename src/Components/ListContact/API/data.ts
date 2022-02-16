export interface IDataModelType {
	model_id: number;
	model_name: string;
	model_type: string;
	latitude: number;
	longitude: number;
	height: number;
	size: {
		x: number;
		y: number;
	};
}

export const dataModels: {[k: number]: IDataModelType} = {
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
};

const dataEx = [
	{
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
];