import inquirer, { type Question, type Answers } from 'inquirer'

const nameQuestion: Question<Answers> = {
  message: 'Enter Name',
  name: 'name',
  type: 'input',
}

export const CliQuestions: Question[] = [nameQuestion]

class CliTool {
  private prompt: Answers | undefined = undefined
  constructor() {
    console.log('Constructing CliTool Instance')
  }

  public async run(): Promise<void> {
    console.log('CliTool Instance Started')

    this.prompt = await inquirer.prompt(CliQuestions)

    console.log(this.prompt)
  }
}

async function main(): Promise<void> {
  const cliTool = new CliTool()

  await cliTool.run()
}

void main()
