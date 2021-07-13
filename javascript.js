{/* <label for="check" class="checkbox">
            <input id="check" type="checkbox" class="checkbox-bt">
            <div class="checkbox-text">Teste de item</div>
            <input type="button" value="X" class="x">
        </label> */}

        const criarItem = () => {
            const item = document.createElement('label')
            item.classList.add('checkbox')
            item.innerHTML = `
                <input id="check" type="checkbox" class="checkbox-bt">
                <div class="checkbox-text">Teste de item</div>
                <input type="button" value="X" class="x">
            `
        }