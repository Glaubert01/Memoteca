const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch('http://localhost:3000/pensamentos');
            return await response.json();
        } 
        catch  {
            alert('Não foi possível conectar com a API');
            throw new Error
        }
    },

    async salvarPensamento(pensamento) {
        try {
            const response = await fetch('http://localhost:3000/pensamentos',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pensamento)
            });
            return await response.json();
        } 
        catch  {
            alert('Não foi possível conectar com a API');
            throw new Error
        }
    }

}

export default api;