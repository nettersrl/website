import { Button } from '@/components/ui/button';
import {
  Database,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Workflow,
  CheckCircle,
  TrendingUp,
  Lock,
  Layers,
  Building2,
  Cloud,
  Users,
  MessageSquare,
  Repeat
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Import local images
import aiImage from '@/assets/shubham-dhage-MBfYGVsDEp8-unsplash.jpg';
import transactionImage from '@/assets/shubham-dhage-km9umcj61Ow-unsplash.jpg';
import analyticsImage from '@/assets/shubham-dhage-lY0-Y3kX5ps-unsplash.jpg';
import ollapImage from '@/assets/shubham-dhage-pXdzCRJNum0-unsplash.jpg';
import streamingImage from '@/assets/max-petrunin-VKC2jxpRms0-unsplash.jpg';

export function NetterDSQL() {
  const { t } = useTranslation();
  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Database className="mr-2 h-4 w-4" />
            {t('netterDSQL.badge')}
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {t('netterDSQL.title')}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t('netterDSQL.subtitle')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              {t('netterDSQL.buttons.getStarted')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              {t('netterDSQL.buttons.viewDocumentation')}
              <Database className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Target Audience */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {t('netterDSQL.targetAudience.title')}
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            {t('netterDSQL.targetAudience.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Cloud className="h-12 w-12 mb-4 mx-auto text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">
                {t('netterDSQL.targetAudience.cloudProviders.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('netterDSQL.targetAudience.cloudProviders.description')}
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 mb-4 mx-auto text-green-600" />
              <h3 className="text-xl font-semibold mb-3">
                {t('netterDSQL.targetAudience.anySizeBusiness.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('netterDSQL.targetAudience.anySizeBusiness.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid gap-8 lg:gap-12 mb-16">
          {/* AI-Powered Features */}
          <div
            className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 border border-border relative overflow-hidden"
            style={{
              backgroundImage: `url(${aiImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div
              className="relative z-20 backdrop-blur-sm bg-black/60 p-6 w-full lg:w-2/3 shadow-lg"
              style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)' }}
            >
              <Sparkles className="h-12 w-12 text-white mb-4" />
              <h2
                className="text-2xl font-bold tracking-tight mb-4 text-white drop-shadow-lg"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
              >
                {t('netterDSQL.keyFeatures.aiPowered.title')}
              </h2>
              <p
                className="text-white mb-6 leading-relaxed drop-shadow-md"
                style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}
              >
                {t('netterDSQL.keyFeatures.aiPowered.description')}
              </p>
              <div className="space-y-3 mb-6">
                <div
                  className="flex items-center text-sm text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('netterDSQL.keyFeatures.aiPowered.vectorSearch')}
                </div>
                <div
                  className="flex items-center text-sm text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('netterDSQL.keyFeatures.aiPowered.llmReady')}
                </div>
                <div
                  className="flex items-center text-sm text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('netterDSQL.keyFeatures.aiPowered.semanticSearch')}
                </div>
              </div>
            </div>
          </div>

          {/* Transactional Power */}
          <div
            className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border relative overflow-hidden"
            style={{
              backgroundImage: `url(${transactionImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div
              className="relative z-20 backdrop-blur-sm bg-black/60 p-6 w-full lg:w-2/3 shadow-lg ml-auto"
              style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)' }}
            >
              <Shield className="h-12 w-12 text-white mb-4" />
              <h2
                className="text-2xl font-bold tracking-tight mb-4 text-white drop-shadow-lg"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
              >
                {t('netterDSQL.keyFeatures.acidTransactions.title')}
              </h2>
              <p
                className="text-white mb-6 leading-relaxed drop-shadow-md"
                style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}
              >
                {t('netterDSQL.keyFeatures.acidTransactions.description')}
              </p>
              <div className="space-y-3 mb-6">
                <div
                  className="flex items-center text-sm text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {t('netterDSQL.keyFeatures.acidTransactions.consistency')}
                </div>
                <div
                  className="flex items-center text-sm text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {t('netterDSQL.keyFeatures.acidTransactions.onlineScalability')}
                </div>
                <div
                  className="flex items-center text-sm text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {t('netterDSQL.keyFeatures.acidTransactions.cdc')}
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Performance */}
          <div
            className="bg-gradient-to-br from-orange-50 to-red-50 p-8 border border-border relative overflow-hidden"
            style={{
              backgroundImage: `url(${analyticsImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div
              className="relative z-20 backdrop-blur-sm bg-black/60 p-6 w-full lg:w-2/3 shadow-lg"
              style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)' }}
            >
              <BarChart3 className="h-12 w-12 text-white mb-4" />
              <h2
                className="text-2xl font-bold tracking-tight mb-4 text-white drop-shadow-lg"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
              >
                {t('netterDSQL.keyFeatures.analytics.title')}
              </h2>
              <p
                className="text-white mb-6 leading-relaxed drop-shadow-md"
                style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}
              >
                {t('netterDSQL.keyFeatures.analytics.description')}
              </p>
              <div className="space-y-3 mb-6">
                <div
                  className="flex items-center text-sm text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  {t('netterDSQL.keyFeatures.analytics.columnar')}
                </div>
                <div
                  className="flex items-center text-sm text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  {t('netterDSQL.keyFeatures.analytics.vectorized')}
                </div>
                <div
                  className="flex items-center text-sm text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  {t('netterDSQL.keyFeatures.analytics.federated')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OLTP & OLAP Capabilities */}
        <div
          className="bg-gradient-to-br from-indigo-50 to-cyan-50 p-8 border border-border relative overflow-hidden mb-16"
          style={{
            backgroundImage: `url(${ollapImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div
            className="relative z-20 backdrop-blur-sm bg-black/60 p-6 w-full lg:w-2/3 shadow-lg ml-auto"
            style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)' }}
          >
            <Users className="h-12 w-12 text-white mb-4" />
            <h2 className="text-2xl font-bold tracking-tight mb-4 text-white">
              {t('netterDSQL.oltpOlap.title')}
            </h2>
            <p
              className="text-white mb-6 leading-relaxed drop-shadow-md"
              style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}
            >
              {t('netterDSQL.oltpOlap.description')}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div
                  className="text-sm font-semibold text-white mb-2 drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
                >
                  {t('netterDSQL.oltpOlap.oltpFeatures.title')}
                </div>
                <div
                  className="flex items-center text-sm text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {t('netterDSQL.oltpOlap.oltpFeatures.highFrequency')}
                </div>
                <div
                  className="flex items-center text-sm text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {t('netterDSQL.oltpOlap.oltpFeatures.lowLatency')}
                </div>
                <div
                  className="flex items-center text-sm text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {t('netterDSQL.oltpOlap.oltpFeatures.acid')}
                </div>
              </div>
              <div className="space-y-3">
                <div
                  className="text-sm font-semibold text-white mb-2 drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
                >
                  {t('netterDSQL.oltpOlap.olapFeatures.title')}
                </div>
                <div
                  className="flex items-center text-sm text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  {t('netterDSQL.oltpOlap.olapFeatures.complexQueries')}
                </div>
                <div
                  className="flex items-center text-sm text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  {t('netterDSQL.oltpOlap.olapFeatures.columnar')}
                </div>
                <div
                  className="flex items-center text-sm text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  {t('netterDSQL.oltpOlap.olapFeatures.petabyte')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kafka-Compatible Event Streaming */}
        <div
          className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 border border-border relative overflow-hidden mb-16"
          style={{
            backgroundImage: `url(${streamingImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div
            className="relative z-20 backdrop-blur-sm bg-black/60 p-6 w-full lg:w-2/3 shadow-lg"
            style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)' }}
          >
            <MessageSquare className="h-12 w-12 text-white mb-4" />
            <h2 className="text-2xl font-bold tracking-tight mb-4 text-white">
              {t('netterDSQL.eventQueue.title')}
            </h2>
            <p
              className="text-white mb-6 leading-relaxed drop-shadow-md"
              style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}
            >
              {t('netterDSQL.eventQueue.description')}
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-black/60 p-4 backdrop-blur-sm">
                <div
                  className="flex items-center text-sm font-semibold text-white mb-2 drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
                >
                  <Repeat className="h-4 w-4 mr-2" />
                  {t('netterDSQL.eventQueue.persistent.title')}
                </div>
                <p
                  className="text-xs text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  {t('netterDSQL.eventQueue.persistent.description')}
                </p>
              </div>
              <div className="bg-black/60 p-4 backdrop-blur-sm">
                <div
                  className="flex items-center text-sm font-semibold text-white mb-2 drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
                >
                  <Database className="h-4 w-4 mr-2" />
                  {t('netterDSQL.eventQueue.databaseNative.title')}
                </div>
                <p
                  className="text-xs text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  {t('netterDSQL.eventQueue.databaseNative.description')}
                </p>
              </div>
              <div className="bg-black/60 p-4 backdrop-blur-sm">
                <div
                  className="flex items-center text-sm font-semibold text-white mb-2 drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
                >
                  <Workflow className="h-4 w-4 mr-2" />
                  {t('netterDSQL.eventQueue.kafkaCompatibility.title')}
                </div>
                <p
                  className="text-xs text-white drop-shadow-sm"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                >
                  {t('netterDSQL.eventQueue.kafkaCompatibility.description')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Streaming & Real-time */}
        <div
          className="bg-gray-900 p-8 border border-border relative overflow-hidden mb-16"
          style={{
            backgroundImage: `url(${streamingImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div
            className="relative z-20 backdrop-blur-sm bg-black/60 p-6 w-full lg:w-1/2 shadow-lg ml-auto"
            style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)' }}
          >
            <Workflow className="h-12 w-12 text-white mb-4" />
            <h2 className="text-2xl font-bold tracking-tight mb-4 text-white">
              {t('netterDSQL.streaming.title')}
            </h2>
            <p
              className="text-white mb-6 leading-relaxed drop-shadow-md"
              style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}
            >
              {t('netterDSQL.streaming.description')}
            </p>
            <div className="space-y-3 mb-6">
              <div
                className="flex items-center text-sm text-white drop-shadow-sm"
                style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
              >
                <Zap className="h-4 w-4 mr-2" />
                {t('netterDSQL.streaming.kafkaCompatible')}
              </div>
              <div
                className="flex items-center text-sm text-white drop-shadow-sm"
                style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
              >
                <Zap className="h-4 w-4 mr-2" />
                {t('netterDSQL.streaming.exactlyOnce')}
              </div>
              <div
                className="flex items-center text-sm text-white drop-shadow-sm"
                style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
              >
                <Zap className="h-4 w-4 mr-2" />
                {t('netterDSQL.streaming.transactional')}
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Options */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            {t('netterDSQL.deployment.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Globe className="h-8 w-8 mb-4 mx-auto text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">
                {t('netterDSQL.deployment.openSource.title')}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t('netterDSQL.deployment.openSource.description')}
              </p>
              <Button variant="outline">{t('netterDSQL.deployment.openSource.cta')}</Button>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Lock className="h-8 w-8 mb-4 mx-auto text-green-600" />
              <h3 className="text-xl font-semibold mb-3">
                {t('netterDSQL.deployment.enterprise.title')}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t('netterDSQL.deployment.enterprise.description')}
              </p>
              <Button variant="outline">{t('netterDSQL.deployment.enterprise.cta')}</Button>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Layers className="h-8 w-8 mb-4 mx-auto text-purple-600" />
              <h3 className="text-xl font-semibold mb-3">
                {t('netterDSQL.deployment.cloudManaged.title')}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t('netterDSQL.deployment.cloudManaged.description')}
              </p>
              <Button variant="outline">{t('netterDSQL.deployment.cloudManaged.cta')}</Button>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="bg-gray-50 p-8 border border-border text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            {t('netterDSQL.performanceStats.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.99%</div>
              <div className="text-sm text-muted-foreground">
                {t('netterDSQL.performanceStats.availability')}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
              <div className="text-sm text-muted-foreground">
                {t('netterDSQL.performanceStats.scalability')}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">ACID</div>
              <div className="text-sm text-muted-foreground">
                {t('netterDSQL.performanceStats.transactions')}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">3-in-1</div>
              <div className="text-sm text-muted-foreground">
                {t('netterDSQL.performanceStats.workloads')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}