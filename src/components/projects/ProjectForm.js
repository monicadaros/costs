function ProjectForm() {
  return (
    <form>
        <div>
            <input type="text" placeholder='Nome do projeto'/>
        </div>
        <div>
            <input type="number" placeholder='Orçamento total do projeto'/>
        </div>
        <div>
            <select namme="category_id">
                <option value="">Selecione a categoria
                </option>
            </select>
        </div>
        <div>
            <input type="submit" value="Criar Projeto"/>
        </div>
    </form>
  )
}

export default ProjectForm;