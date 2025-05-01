import {
  GithubFilled,
  LinkedinFilled,
  MailFilled,
  PhoneFilled,
} from '@ant-design/icons';

const data = [
  {
    icon: LinkedinFilled,
    title: 'Address',
    value: 'linkedin.com/latiosthinh',
  },
  {
    icon: GithubFilled,
    title: 'Github',
    value: 'github.com/latiosthinh',
  },
  {
    icon: MailFilled,
    title: 'Email',
    value: 'thomasng.4542@gmail.com',
  },
  {
    icon: PhoneFilled,
    title: 'Phone',
    value: '(+84) 082.610.1991',
  },
];

export default function Contact() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-x-14 gap-y-4">
      {data.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <item.icon className="text-yellow-400" />
          <p className="text-white">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
