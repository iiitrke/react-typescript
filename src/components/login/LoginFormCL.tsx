import React from "react";

type LoginFormProps = { name: string };

type IState = { value: string };
export class LoginFormCL extends React.Component<LoginFormProps, IState> {
  constructor(props: LoginFormProps) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: React.MouseEvent) {
    event.preventDefault();
    console.log("A name was submitted: ", this.state.value);
  }
  render() {
    return (
      <>
        <h1>Form Login</h1>

        <form>
          <label>
            {" "}
            Enter Name1:
            <input
              type="text"
              name="name"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>

          <input type="submit" name="submit" onClick={this.handleSubmit} />
        </form>
      </>
    );
  }
}

// export const LoginFormFC = () => {
//   return (
//     <>
//       <h1>Form Login</h1>

//       <form>
//         <label>
//           {" "}
//           Enter Name:
//           <input type="text" name="name" />
//         </label>

//         <input type="submit" name="submit" />
//       </form>
//     </>
//   );
// };
