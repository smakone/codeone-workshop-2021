export default function AddBar(props){
    return(
        <div className="bg-white flex items-center rounded-full shadow-xl">
          <input 
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
            type="text" 
            placeholder="Add things to do"
            value={props.value}
            onChange={props.change}
            onKeyPress={props.press}
          />
          <div className="p-4">
            <button 
              className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
              onClick={props.click}
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
    );
}