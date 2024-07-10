import { useSelector } from 'react-redux';
import styles from './Anuncie.module.scss';
import Header from 'components/Header';
import Button from 'components/Button';
import { useForm } from 'react-hook-form';

export default function Anuncie() {

    const categorias = useSelector(state => state.categorias.map(({ nome, id }) => ({nome, id})));
    const { register, handleSubmit } = useForm();
    
    const cadastrar = (parametro) => {
        console.log('parâmetro: ' , parametro);
    }

    return (
        <div className={styles.container}>
            <Header 
                titulo='Anuncie aqui!'
                descricao="Anuncie seu produto no melhor site do Brasil"
            />
            <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
                <input {...register('nome')} placeholder='Nome do produto' alt='Nome do produto'/>
                <input {...register('descricao')} placeholder='Descrição do produto' alt='Descrição do produto'/>
                <input {...register('imagem')} placeholder='URL da imagem do produto' alt='URL da imagem do produto'/>
                <select {...register('categoria')}>
                    <option value='' disabled>Selecione a categoria</option>
                    {categorias.map(categoria => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.nome} 
                        </option>
                    ))}
                </select>
                <input {...register('preco')} type='number' placeholder='Preço do produto'/>
                <Button type='submit'>
                    Cadastrar produto
                </Button>
            </form>
        </div>
    );
}