import { createRef } from 'react';
import { FormHandles } from '@unform/core';
import { FiCheckSquare } from 'react-icons/fi';

import Modal from '../Modal';
import Input from '../Input';

import { FoodProps } from '../../types';
import { Form } from './styles';

type Props = {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (food: FoodProps) => void;
  editingFood: FoodProps;
};

export default function ModalEditFood({ isOpen, setIsOpen, handleUpdateFood, editingFood }: Props) {
  const formRef = createRef<FormHandles>();

  async function handleSubmit(data: FoodProps) {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};
