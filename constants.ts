
import { Product, Farmer, Policy, Feedback } from './types';

export const PRODUCTS: Product[] = [
  { 
    id: 1, 
    name: "高山有机红富士", 
    price: "¥58.00 起", 
    category: "水果", 
    image: "https://picsum.photos/seed/apple/400/300", 
    desc: "产自海拔1500米，皮薄肉脆，甜度极高。",
    specs: [
      { label: "1kg 家庭装", price: 15 },
      { label: "2.5kg 礼品装", price: 35 },
      { label: "5kg 批发特惠", price: 58 }
    ]
  },
  { 
    id: 2, 
    name: "五常核心产区大米", 
    price: "¥45.00 起", 
    category: "粮油", 
    image: "https://picsum.photos/seed/rice/400/300", 
    desc: "颗粒饱满，质地坚硬，饭粒油亮，香味浓郁。",
    specs: [
      { label: "2.5kg 尝鲜装", price: 45 },
      { label: "5kg 真空包装", price: 85 },
      { label: "10kg 实惠家庭装", price: 158 }
    ]
  },
  { 
    id: 3, 
    name: "林下土鸡蛋", 
    price: "¥45.00 / 30枚", 
    category: "禽蛋", 
    image: "https://picsum.photos/seed/egg/400/300", 
    desc: "纯天然散养，无抗生素，蛋黄大且橙红。",
    specs: [
      { label: "10枚 体验盒", price: 18 },
      { label: "30枚 经济装", price: 45 },
      { label: "60枚 送礼装", price: 85 }
    ]
  },
  { id: 4, name: "深山野生香菇", price: "¥65.00 / 500g", category: "干货", image: "https://picsum.photos/seed/mushroom/400/300", desc: "自然晾晒，肉质肥厚，香气扑鼻。" },
  { id: 5, name: "赣南脐橙", price: "¥39.00 / 5kg", category: "水果", image: "https://picsum.photos/seed/orange/400/300", desc: "色泽鲜艳，果肉脆嫩多汁，酸甜适口。" },
  { id: 6, name: "手工石磨面粉", price: "¥35.00 / 5kg", category: "粮油", image: "https://picsum.photos/seed/flour/400/300", desc: "低速研磨，保留小麦原味及营养成分。" },
];

export const FARMERS: Farmer[] = [
  { id: 1, name: "老张头", location: "陕西洛川", avatar: "https://picsum.photos/seed/farmer1/150/150", story: "种了30年苹果，老张坚持不用农药，只用有机肥。他说：'做人要厚道，种地更要厚道。'" },
  { id: 2, name: "王大姐", location: "黑龙江五常", avatar: "https://picsum.photos/seed/farmer2/150/150", story: "带动全村妇女一起种植绿色大米，通过电商直播，让家乡的味道传遍全国。" },
  { id: 3, name: "李阿叔", location: "云南怒江", avatar: "https://picsum.photos/seed/farmer3/150/150", story: "在陡峭的山坡上采摘蜂蜜，每一滴都是大自然的馈赠，是当地扶贫的重要产业。" },
];

export const POLICIES: Policy[] = [
  { id: 1, title: "2024年农村电商发展扶持政策", date: "2024-01-15", summary: "国家将拨付专项资金支持农村物流体系建设，降低农产品上行成本。" },
  { id: 2, title: "乡村振兴人才回流奖励计划", date: "2023-12-20", summary: "大学生返乡创业可享受免税及低息贷款支持，助力现代化农业。" },
  { id: 3, title: "农业保险补贴标准提升通知", date: "2024-02-05", summary: "提高主要农作物保险覆盖范围，切实保障农户基本收益不受自然灾害影响。" },
];

export const FEEDBACKS: Feedback[] = [
  { id: 1, user: "刘先生", rating: 5, comment: "苹果真的很甜，家里孩子很喜欢吃。支持助农！", avatar: "https://i.pravatar.cc/150?u=1" },
  { id: 2, user: "陈女士", rating: 5, comment: "物流很快，包装得也很扎实，没有磕碰，好评。", avatar: "https://i.pravatar.cc/150?u=2" },
  { id: 3, user: "张伟", rating: 4, comment: "米饭真的很香，这种大米超市里买不到这个味道。", avatar: "https://i.pravatar.cc/150?u=3" },
];
