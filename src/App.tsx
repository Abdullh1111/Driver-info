import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"




function App() {

  return (
   <div className="h-screen flex justify-center md:items-center w-screen">
    <div className="bg-slate-200 md:w-[320px] xl:w-[520px] w-full flex flex-col gap-4 py-10 px-5 rounded-xl shadow-xl shadow-purple-400">
    {/* category */}
    <label>
        <p className="font-semibold text-black">Vehicle Category</p>
        <div className="p-1 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-500">
        <select className="w-full p-2 rounded-3xl ">
          <option>New</option>
          <option>Old</option>
        </select>
        </div>
      </label>
      {/* parcel weight capacity */}
    <label>
    <p className="font-semibold text-black">{`Parcel Weight Capacity (kg)`}</p>
    <div className="p-1 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-500">
  <Input type="text" placeholder="Enter max weight" className="bg-white rounded-3xl"></Input>
</div>
    </label>
    {/* licence plate number */}
    <label>
    <p className="font-semibold text-black">Licence Plate Number<span className="text-red-500">*</span></p>
    <div className="p-1 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-500">
  <Input type="text" className="bg-white rounded-3xl" placeholder="EX:DB-3212"></Input>
</div>
    </label>
    {/* licence expiry date */}
    <label>
    <p className="font-semibold text-black">Licence Expiry Date <span className="text-red-500">*</span></p>
    <div className="p-1 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-500">
  <Input type="date" className="bg-white rounded-3xl"></Input>
</div>
    </label>
    {/* fuel type */}
    <label>
        <p className="font-semibold text-black">Fuel Type</p>
        <div className="p-1 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-500">
        <select className="w-full p-2 rounded-3xl ">
        <option value="Select fuel type" selected>Select fuel type</option>
          <option>Petrol</option>
          <option>Desel</option>
        </select>
        </div>
      </label>
      {/* documents */}

      <div className="flex justify-center items-center flex-col mb-4 border-2 border-dashed border-gray-300 p-6 rounded-lg">
  <input
    type="file"
    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
  />
  <div className="mt-2 text-gray-500">
    <i className="fas fa-file-upload text-2xl"></i>
    <span>Upload  documents</span>
  </div>
</div>
{/* submit button */}
    <Button className="bg-gradient-to-r from-purple-600 to-blue-500">Submit</Button>
    </div>
   </div>
  )
}

export default App
