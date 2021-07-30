import { Color } from '../../application/common/color';
import Button from '../../infrastructure/component/Button/Button';
import { ReactComponent as Phone } from '../../assets/images/phone.svg';
import { Text } from '../../infrastructure/component/Text/Text';
import { Card } from '../../infrastructure/component/Card/Card';
import { Input } from '../../infrastructure/component/Input/Input';

const colors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];

function App() {
  return (
    <div className="space-y-4  p-4">
      <div className="flex flex-col">
        <div>
          <p>Size</p>
          <div className="flex space-x-2 items-center">
            <Button size="small">Small</Button>
            <Button>Normal</Button>
            <Button size="large">Large</Button>
          </div>
        </div>

        <div>
          <p>Variant</p>
          <div className="flex space-x-2 items-center">
            <Button onClick={() => console.log('Click')}>Solid</Button>
            <Button onClick={() => console.log('Click')} disabled>
              Solid
            </Button>
            <Button variant="outline">Outline</Button>
            <Button variant="outline" disabled>
              Outline
            </Button>
            <Button variant="link">Link</Button>
            <Button variant="link" disabled>
              Link
            </Button>
          </div>
        </div>

        <div>
          <p>Colors</p>
          <div className="flex space-x-2 items-center">
            {colors.map((color) => (
              <Button key={color} color={color as Color}>
                Solid
              </Button>
            ))}
          </div>
        </div>

        <div>
          <p>Border type</p>
          <div className="flex space-x-2 items-center">
            <Button>Default</Button>
            <Button borderType="square">Square</Button>
            <Button borderType="rounded">Rounded</Button>
          </div>
        </div>

        <div>
          <p>Mixed type</p>
          <div className="flex space-x-2 items-center">
            <Button
              color="pink"
              variant="outline"
              borderType="rounded"
              className="uppercase"
              size="large"
            >
              Mixed
            </Button>
          </div>
        </div>

        <div>
          <p>With icon</p>
          <div className="flex space-x-2 items-center">
            <Button className="flex items-center space-x-3">
              <Phone className="w-4" />
              <p>Call lme</p>
              <Phone className="w-4" />
            </Button>

            <Button size="small" iconOnly>
              <Phone className="w-4" />
            </Button>

            <Button iconOnly>
              <Phone className="w-4" />
            </Button>

            <Button size="large" iconOnly>
              <Phone className="w-4" />
            </Button>

            <Button size="small" borderType="rounded" iconOnly>
              <Phone className="w-4" />
            </Button>

            <Button borderType="rounded" iconOnly>
              <Phone className="w-4" />
            </Button>

            <Button
              size="large"
              borderType="rounded"
              variant="link"
              className="shadow-xl"
              color="gray"
              iconOnly
            >
              <Phone className="w-4" />
            </Button>
          </div>
        </div>

        {/* <div className="flex"> */}
        <Button className="flex items-center justify-center space-x-3">
          <Phone className="w-4" />
          <p>Call lme</p>
          <Phone className="w-4" />
        </Button>
        {/* </div> */}
      </div>

      <div className="flex flex-col space-y-4">
        <p>Typography</p>
        <Text type="h1">Typography</Text>
        <Text type="h2">Typography</Text>
        <Text type="h3">Typography</Text>
        <Text type="h4">Typography</Text>
        <Text type="h5">Typography</Text>
        <Text type="h6">Typography</Text>
        <Text type="leadText">Typography</Text>
        <Text>Typography</Text>
        <Text type="small">Typography</Text>
      </div>

      <div className="space-y-10">
        <p>Card</p>
        <div>
          <Card>
            <Text>Card</Text>
          </Card>

          <Card>
            <Text>Card</Text>
          </Card>
        </div>
      </div>

      <div className=" space-x-2 space-y-2">
        <p>Input</p>
        <div className="space-x-2">
          <Input inputSize="small" />
          <Input />
          <Input inputSize="large" />
        </div>
        <div className="space-x-2">
          <Input />
          <Input borderType="square" placeholder="square" />
          <Input borderType="rounded" />
        </div>
        <div className="space-x-2 space-y-2">
          {colors.map((color) => (
            <Input key={color} color={color as Color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
