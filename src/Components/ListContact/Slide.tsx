import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData, IDataModelType, IDataDetailModel } from "./interface";
import { dataModels } from './API/data'
import { CouterFriend, CouterFollow, AddUser, DeleteUser, UpdateUser, fetchUserThunk } from './Thunk'
import { height } from "@mui/system";



export interface ListState {
  follow: number,
  friend: number,
  data: IData | null,
  model: IDataModelType | null,
  detailmodel: IDataDetailModel | null,

}

const initialState: ListState = {
  follow: 0,
  friend: 0,
  data: null,
  model: null,
  detailmodel: null,
}


const dataDemo: Array<IDataModelType> = Object.values(dataModels);

export const listDemo = dataDemo.map((model, index) => {
  return model
})

const dataDetail: Array<IDataDetailModel> = [];
Object.keys(dataModels).forEach(key => {
  dataDetail.push({
    id: dataModels[key].model_id,
    name: dataModels[key].model_name,
    type: dataModels[key].model_type,
    position: {
      latitude: dataModels[key].latitude,
      longitude: dataModels[key].longitude,
      altitude: dataModels[key].height,
    },
    size: dataModels[key].size,
  })
});

const listSlice = createSlice({
  name: 'couterlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserThunk.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
    }));
    builder.addCase(CouterFollow.fulfilled, (state, action) => ({
      ...state,
      follow: action.payload,
    }
    ));
    builder.addCase(CouterFriend.fulfilled, (state, action) => ({
      ...state,
      friend: action.payload,
    }
    ));
    builder.addCase(AddUser.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
    }
    ));
    // builder.addCase(DeleteUser.fulfilled, (state, action) => ({
    //   ...state,
    //       state.data = state.data.filter((item) => item.id !== action.payload)

    // }))
    // builder
    //   .addCase(CouterFollow.fulfilled, (state, action) => {
    //     return {
    //       ...state,
    //       follow: action.payload,
    //     };
    //   })
    //   .addCase(CouterFriend.fulfilled, (state, action) => {
    //     return {
    //       ...state,
    //       friend: action.payload,
    //     };
    //   })
    //   .addCase(fetchUserThunk.fulfilled, (state, action) => {
    //     console.log(action.payload.data.first_name, 'add')
    //     return {
    //       ...state,
    //       data: [...state.data, action.payload]
    //     };
    //   })
    //   .addCase(AddUser.fulfilled, (state, action) => {
    //     return {
    //       ...state,
    //       data: [...state.data, action.payload]
    //     };
    //   })
    //   .addCase(DeleteUser.fulfilled, (state, action) => {
    //     return {
    //       ...state,
    //       data: state.data.filter((item) => item.id !== action.payload)
    //     };
    //   })
    //   .addCase(UpdateUser.fulfilled, (state, action) => {
    //     const {
    //       payload:{id, first_name},
    //     } = action;
    //     return {
    //       ...state,
    //       data: state.data.map((item) => item.id === id ? { ...item, first_name } : item
    //       )
    //     }
    //   })
  }
})


export default listSlice.reducer


