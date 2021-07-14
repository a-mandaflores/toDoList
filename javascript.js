{/* <label for="check" class="checkbox">
            <input id="check" type="checkbox" class="checkbox-bt">
            <div class="checkbox-text">Teste de item</div>
            <input type="button" value="X" class="x">
        </label> */}

        let banco = [
            {'tarefa':'Estudar JS', 'status': ''},
            {'tarefa': 'netflix', 'status': 'checked'}            
        ];

        const criarItem = (tarefa, status, indice) => {
            const item = document.createElement('label')
            item.classList.add('checkbox')
            item.innerHTML = `
                <input id="check" type="checkbox" class="checkbox-bt" ${status} data-indice=${indice}>
                <div class="checkbox-text">${tarefa}</div>
                <input type="button" value="x" class="x" data-indice=${indice}>
            `
            document.getElementById('toDoList').appendChild(item)
        }

        const limparTarefas = () => {
            const toDoList = document.getElementById('toDoList');
            while (toDoList.firstChild){
                toDoList.removeChild(toDoList.lastChild);
            }
        }

         const atualizarTela = () => {
             limparTarefas();
             banco.forEach ( (item, indice) => criarItem(item.tarefa, item.status, indice))
         }

         const inserirItem = (evento) =>{
            const tecla = evento.key
            const tarefa = evento.target.value
            if (tecla === 'Enter') {
                banco.push ({'tarefa': tarefa, 'status': ''});
                atualizarTela();
                evento.target.value = ''
            }
        }
        const removerItem = (indice) => {
            banco.splice (indice,1);
            atualizarTela();
        }
        const clickItem = (evento) =>{
            const elemento = evento.target
            if (elemento.type === 'button'){
                const indice = elemento.dataset.indice
                removerItem(indice)
            }
        }
        document.getElementById('newItem').addEventListener('keypress', inserirItem) 
        document.getElementById('toDoList').addEventListener('click', clickItem)
 
        atualizarTela();
        

