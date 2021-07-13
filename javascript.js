{/* <label for="check" class="checkbox">
            <input id="check" type="checkbox" class="checkbox-bt">
            <div class="checkbox-text">Teste de item</div>
            <input type="button" value="X" class="x">
        </label> */}

        let banco = [
            {'tarefa':'Estudar JS', 'status': ''},
            {'tarefa': 'netflix', 'status': 'checked'},
            
        ]

        const criarItem = (text, status) => {
            const item = document.createElement('label')
            item.classList.add('checkbox')
            item.innerHTML = `
                <input id="check" type="checkbox" class="checkbox-bt" ${status}>
                <div class="checkbox-text">${text}</div>
                <input type="button" value="x" class="x">
            `
            document.getElementById('todoList').appendChild(item)
        }

        const limparTarefas = () => {
            const todoList = documento.getElementById('todoList')
            while (todoList.firstChild) {
                todoList.removeChild(todoList.lastCrhild)
            }
        }

        const atualizarTela = () => {
            limparTarefas
            banco.forEach (item => criarItem(item.tarefa));
        }

        const inserirItem= (evento) =>{
            const techa = evento.key
            if (tecka === 'Enter') {
                banco.push ({'tarefa':'Estudar JS', 'status': ''})
                atualizarTela();
            }
        }
        document.getElementById('newItem').addEventListener('keypress', inserirItem)

        atualizarTela();

