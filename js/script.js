var a = document.getElementById('exp01')

    a.addEventListener('mouseenter',entrar)
    a.addEventListener('mouseout',sair) 

function entrar() {
    a.innerText = 'Importação e manipulação de banco de dados Firebird, MySql e Postgre; manutenção e suporte em sistema de gestão de RH Iplugged e Siap2000, e sistema de gestão escolar Educ; manutenção e criação de fórmulas de cálculo de RH; edição e criação de plano de contas para E-social; Build e envio de apps para lojas Google e Apple; uso de ferramentas como o Dbeaver, SQLManager, UltraEdit, Anydesk, Visual Studio e Xcode.'
    a.style.background = 'red'
    
}
    function sair() {
        a.innerText = 'Visualizado'
        a.style.background = 'rgb(241, 95, 95)'
    }