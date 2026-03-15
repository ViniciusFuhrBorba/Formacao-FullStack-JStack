const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    // Listar todos os registros
    const categories = await CategoryRepository.findAll(orderBy);
    response.json(categories);
  }
  async show(request, response) {
    const { id } = request.params;
    const categorie = await CategoryRepository.findById(id);

    if (!categorie) {
      return response.status(404).json({ error: 'Categorie not found!' });
    }

    response.json(categorie);
  }
  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categorieExists = await CategoryRepository.findByName(name);

    if (categorieExists) {
      return response.status(400).json({ error: 'This name is already in use' });
    }

    const categorie = await CategoryRepository.create({ name });

    response.json(categorie);
  }
  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const categorieExists = await CategoryRepository.findById(id);

    if (!categorieExists) {
      return response.status(404).json({ error: 'Categoria not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categorieExistsWithSameName = await CategoryRepository.findByName(name);

    if (categorieExistsWithSameName && categorieExistsWithSameName.id !== id) {
      return response.status(400).json({ error: 'This name is already in use' });
    }

    const contact = await CategoryRepository.update(id, { name });

    response.json(contact);
  }
  async delete(request, response) {
    //Deletar um registro
    const { id } = request.params;

    await CategoryRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();