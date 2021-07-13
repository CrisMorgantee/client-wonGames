import { renderWithTheme } from 'utils/tests/helpers'
import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">Link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 {
        color: #030517;
        text-align: center;
        font-size: 1.4rem;
      }

      .c0 a {
        color: #3CD3C1;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #3CD3C1;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
        margin-left: 0.8rem;
      }

      .c0 a:hover {
        color: #29b3a3;
        border-bottom: 0.1rem solid #29b3a3;
      }

      <body>
        <div>
          <main
            class=""
          >
            <div
              class="c0"
            >
              My nice 
              <a
                href="#"
              >
                Link
              </a>
            </div>
          </main>
        </div>
      </body>
    `)
  })
})
