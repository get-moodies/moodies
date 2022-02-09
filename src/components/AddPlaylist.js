import useFormData from "./useFormData";
import useLists from "../components/useLists"

const defaultData = {
	name: "",
	tags: [],
	public: true
};

export default function AddPlaylist({handleClose, movieId, user, putMovie}) {

    const [data, handleChange] = useFormData(defaultData);
    const { addList, addMovie } = useLists()
  
    return (
    <div>AddPlaylist

        <div className="bg-black shadow-lg rounded-xl px-8 pt-2 pb-8 bg-opacity-80">
					<div className="text-xl text-white font-medium m-5">join moodies</div>
					<div className="mb-4">
						<label
							className="block text-white text-sm font-base mb-2"
							htmlFor="name"
						>
							List Name
						</label>
						<input
							className="
								form-control
								block
								w-full
								px-3
								py-1.5
								text-base
								font-normal
								text-gray-700
								bg-white bg-clip-padding
								border border-solid border-gray-300
								rounded
								transition
								ease-in-out
								m-0
								focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
							type="text"
							placeholder={"My favourite list"}
							name="name"
							onChange={handleChange}
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-white text-sm font-base mb-2"
							htmlFor="tags"
						>
							tags
						</label>
						<input
							className="
								form-control
								block
								w-full
								px-3
								py-1.5
								text-base
								font-normal
								text-gray-700
								bg-white bg-clip-padding
								border border-solid border-gray-300
								rounded
								transition
								ease-in-out
								m-0
								focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
							type="text"
							placeholder={"happy adventure"}
							name="tags"
							onChange={handleChange}
						/>
					</div>
					<div className="mb-8">
						<div>
                            <input type="radio" name="public" value={true} checked onChange={handleChange}/>
                            <label htmlFor="public">Public</label>
                        </div>

                        <div>
                            <input type="radio" id="private" name="public" value={false} onChange={handleChange}/>
                            <label htmlFor="private">Private</label>
                        </div>
						
					</div>
					<div className="flex items-center justify-center">
						<button
							className="
                            bg-gray-400 hover:bg-gray-300  px-4 py-2 rounded-full font-medium text-sm  text-slate-900"
							type="button"
							onClick={() => {
                                // console.log({...data ,
                                //     "editRight": ["gerardo"],
                                //     "movies": [movieId.toString()]
                                // })
								const post = {...data ,
                                                "editRight": ["gerardo"],
                                                "movies": [movieId.toString()]
                                            }
                                addList(post, user)
                                addMovie(putMovie);
                                handleClose();
							}}
						>
							Create and add
						</button>
					</div>
					
				</div>



















    </div>









  )
}

// name": "borrar",
// // 			
// "public": false,
// // 			
// "movies": [
// 				"354912",
// 				"550",
// 				"512195"
// 			],
		
// 			"editRight": [
// 				"gerardo"
// 			]
// }