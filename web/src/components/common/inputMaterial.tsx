const InputMaterial = () => {
  return (
    <div className="flex">
      <input type="text" value={material} required />
      <button type="button" onClick={addInput}>追加</button>
      <button type="button" onClick={deleteInput}>削除</button>
    </div>
  );
}

export default InputMaterial