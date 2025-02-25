const botao = document.getElementById("Gerar-Senha") as HTMLButtonElement;
const result = document.getElementById("Input-Texto") as HTMLButtonElement;
const maiuscula = document.getElementById(
  "Letras-Maiusculas"
) as HTMLInputElement;
const numeros = document.getElementById("Numeros") as HTMLInputElement;
const caracteres = document.getElementById(
  "Caracteres-Especiais"
) as HTMLInputElement;
const slider = document.getElementById("slider") as HTMLInputElement;
const valor = document.getElementById("output") as HTMLLabelElement;

type random = (num: number) => number;

let letras: string = "abcdefghijklmnopqrstuvwxyz";
let letrasMaisculas: string = letras.toUpperCase();
let num: string = "1234567890";
let esp: string = "!@#$%^&*()-_=+[]{}|;:',.<>?/";

slider.addEventListener("input", () => {
  valor.textContent = slider.value;
});

botao.addEventListener("click", (e: Event) => {
  e.preventDefault();

  let caracteresDisponiveis: string = "abcdefghijklmnopqrstuvwxyz";

  if (numeros.checked) caracteresDisponiveis += num;
  if (maiuscula.checked) caracteresDisponiveis += letrasMaisculas;
  if (caracteres.checked) caracteresDisponiveis += esp;

  const comprimento = parseInt(slider.value);
  let senhaGerada = "";

  for (let i = 0; i < comprimento; i++) {
    const random: number = numeroAleatorio(caracteresDisponiveis.length - 1);

    senhaGerada += caracteresDisponiveis[random];
  }

  result.value = senhaGerada
});

const numeroAleatorio: random = (num: number): number => {
  return Math.floor(Math.random() * (num + 1));
};
