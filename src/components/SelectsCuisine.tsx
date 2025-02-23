'use client'

interface SelectCuisineProps{
  cuisine: string;
  handleCuisineChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function SelectCuisine(props: SelectCuisineProps){
  return (
    <select
    value={props.cuisine}
    onChange={props.handleCuisineChange}
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option value="">Select Cuisine</option>
    <option value="african">African</option>
    <option value="asian">Asian</option>
    <option value="american">American</option>
    <option value="british">British</option>
    <option value="cajun">Cajun</option>
    <option value="caribbean">Caribbean</option>
    <option value="chinese">Chinese</option>
    <option value="eastern european">Eastern European</option>
    <option value="european">European</option>
    <option value="french">French</option>
    <option value="german">German</option>
    <option value="greek">Greek</option>
    <option value="indian">Indian</option>
    <option value="irish">Irish</option>
    <option value="italian">Italian</option>
    <option value="japanese">Japanese</option>
    <option value="jewish">Jewish</option>
    <option value="korean">Korean</option>
    <option value="latin american">Latin American</option>
    <option value="mediterranean">Mediterranean</option>
    <option value="mexican">Mexican</option>
    <option value="middle eastern">Middle Eastern</option>
    <option value="nordic">Nordic</option>
    <option value="southern">Southern</option>
    <option value="spanish">Spanish</option>
    <option value="thai">Thai</option>
    <option value="vietnamese">Vietnamese</option>
  </select>
  )
}