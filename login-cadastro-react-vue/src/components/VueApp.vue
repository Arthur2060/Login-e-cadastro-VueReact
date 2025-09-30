<script setup>
    import { ref } from 'vue';

    const formState = ref({
        nome: "",
        email: "",
        senha: "",
        telefone: "",
        nascimento: ""
    })

    const handleChange = (e) => {
    const {name, value} = e.target

    formState = ({
      ...formState,
      [name]: value
    })
  }

  const handleClean = () => {
    formState = ({
        nome: "",
        email: "",
        senha: "",
        telefone: "",
        nascimento: ""
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem("usuarios"));

    usuarios.push({ ...formState.value })

    localStorage.setItem("usuarios", JSON.stringify(usuarios, null, 2))

    handleClean()
  }

</script>

<template>
    <form @submit="handleSubmit">
        <div class="campo">
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome" v-model="formState.nome">
        </div>
        <div class="campo">
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" v-model="formState.email">
        </div>
        <div class="campo">
            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha" v-model="formState.senha">
        </div>
        <div class="campo">
            <label for="telefone">Telefone</label>
            <input type="tel" name="telefone" id="telefone" v-model="formState.telefone">
        </div>
        <div class="campo">
            <label for="nascimento">Data de nascimento</label>
            <input type="date" name="nascimento" id="nascimento" v-model="formState.nascimento">
        </div>

        <button type="submit">Cadastrar</button>
    </form>
</template>

<style scoped>
    form {
    display: flex;
    flex-direction: column;
    gap: 5px;

    border: solid rgba(128, 128, 128, 0.726) 2px;
    border-radius: 10px;

    width: fit-content;
    height: fit-content;

    padding: 10%;
    }

    form .campo {
    display: flex;
    flex-direction: column;

    font-family: Arial, Helvetica, sans-serif;
    }

    form button {
    background-color: rgb(20, 122, 218);
    border: none;
    color: white;

    padding: 2%;

    border-radius: 5px;
    }
</style>