export default function Item(props){
    return(
        <div className="grid grid-cols-12 border-b-4 align-item-center">
            <div className="col-span-10">
                <p className="text-md p-5" key={props.key}>{props.item}</p>
            </div>
            <div className="col-span-2 p-3">
                <button 
                    className="bg-green-100 text-white rounded-full p-2 hover:bg-green-500 focus:outline-none h-10 w-10 flex items-center justify-item mx-auto"
                    onClick={props.click}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}