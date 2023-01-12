import { MVP } from './mvp';
// import { Flutter } from './Flutter';
import { OutsourcingCloudDevelopment } from './outsourcingCloudDevelopment';
import { KubernetesOverkill } from './kubernetesOverkill';
import { FlutterForYourNextApp } from './flutterForYourNextApp'
export const articles = [
    {
        id: 1,
        title: `Your Morning Coffee is Like an MVP`,
        body: MVP,
        image: '/static/images/andrew-neel-coffee.jpg',
        preview: 'Building out a reliable, well-designed, and usable MVP is an absolutely vital step in the process of bringing your ideas to market.'
    },
    {
        id: 2,
        title: `How Outsourcing Cloud Development can Benefit your Business`,
        body: OutsourcingCloudDevelopment,
        image: '',
        preview: 'As the world increasingly moves online, businesses must adapt to remain competitive. One way to do this is by outsourcing cloud development. Cloud development is the process of developing and managing software applications that reside on a cloud computing platform. By outsourcing cloud development, businesses can benefit in several ways.'
    },
     {
        id: 3,
        title: `When Kubernetes is Overkill`,
        body: KubernetesOverkill,
        // image: '/static/images/andrew-neel-coffee.jpg',
        preview: `In scenarios such as running a single service, or even multiple services that don't need to communicate with each other, Kubernetes is often overkill. Without the orchestration capabilities of Kubernetes, it can be simpler and cheaper to manage workloads directly on virtual machines (VMs). This approach also allows for more customization of the underlying infrastructure since all manual or scripted configuration can be done on the VMs themselves.`
    },
    {
        id: 4,
        title: `Why Your Business Should Use Flutter For Its next Application`,
        body: FlutterForYourNextApp,
        // image: '/static/images/andrew-neel-coffee.jpg',
        preview: `Are you looking for a cross-platform framework that lets you create beautiful web and mobile applications? Then you should definitely consider Flutter.`
    }
    // {
    //     id: 3,
    //     title: `Why Choose Flutter For Your Next Cross-Platform Mobile Framework`,
    //     body: Flutter,
    //     // image: '/static/images/andrew-neel-coffee.jpg',
    //     preview: `In this blog post, we'll explore why Flutter is the best option for developers who want to create amazing apps that work on both iOS and Android devices. Trust us - you won't be disappointed!`
    // }
]